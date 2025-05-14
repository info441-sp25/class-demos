import express from 'express';
var router = express.Router();

router.get("/", async (req, res) => {
    let allItems = await req.models.Item.find()
    res.json(allItems)
})

router.post("/saveCart", async (req, res) => {
    console.log(
        "saving card, session is currently: ", 
        req.session
    )

    const cartInfo = req.body
    //TODO: validate cart info is only item ids and counts

    // for some reason if I save an object (instead of string) 
    // it gets deleted later
    req.session.cartInfo = JSON.stringify(cartInfo)

    console.log("session is now", req.session)

    res.json({status: "success"})
})

router.get('/getCart', async (req, res) => {
    if(!req.session || !req.session.cartInfo){
        // if no session or saved cart, just return empty cart
        res.json([])
        return
    }

    const cartInfo = JSON.parse(req.session.cartInfo)

    // add item names and prices to the cart info
    const combinedCartInfo = await addPricesToCart(cartInfo, req.models)

    res.json(combinedCartInfo)
})

async function addPricesToCart(cartInfo, models){
    //cartInfo should start like: [{itemId: 342, itemCount: 2}, {itemId:345, itemCount: 1}, ...]

    // look up in the db all the items listed in my cart
    const cartItemIds = cartInfo.map(cartItem => cartItem.itemId)
    const itemsInfo = await models.Item.find().where("_id").in(cartItemIds).exec()

    // itemsInfo will be an array of json, like this:
    // [{_id:342, name: "orange", price: ...}, {_id: 345, name: "apple", ...},...]

    // transform itemsInfo into an object where I can look up info by the id
    let itemsInfoById = {}
    itemsInfo.forEach(itemInfo => {
        itemsInfoById[itemInfo._id] = itemInfo
    })

    // itemsInfoById will look like
    // {
    //  342: {_id:342, name: "orange", price: ...}
    //  345: {_id: 345, name: "apple", ...}
    // }

    // take the cartInfo, and for each item, make a new object that includes the name and price
    const combinedCartInfo = cartInfo.map(cartItem => {
        return {
            itemId: cartItem.itemId, // from user cart
            itemCount: cartItem.itemCount, // from user cart
            name: itemsInfoById[cartItem.itemId].name, // from the db
            price: itemsInfoById[cartItem.itemId].price // from the db
        }
    })
    return combinedCartInfo
}

export default router;
