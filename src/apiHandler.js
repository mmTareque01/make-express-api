const handler = [{
    name: "Create",
    service: (name) => (`exports.${name} = (data) => {
        // ${name} logic here...

        return {message: "Created!"}
    }`),
    controller: (importFunction, newFunction, path) => (`const { ${importFunction} } = require('../../${path}');

    exports.${newFunction} =async (req, res) => {
        try{
         const newData =await ${importFunction}(req.body);
         res.status(201).send({data:newData, message: 'Record created successfully!', links:{current:'', previous:'',next:''}});
        }
        catch(error){
            console.log(error);
            res.status(500).send(error)
        }
    };`),
    route: (importFunction, path) => (`
    
router.post('/create', ${importFunction});`)
}, {
    name: "List",
    service: (name) => (`exports.${name} = (clue, pageSize, pageIndex) => {
        // ${name} logic here...

        return [{message: "Found"}]
    }`),
    controller: (importFunction, newFunction, path) => (`const { ${importFunction} } = require('../../${path}');

    exports.${newFunction} =async (req, res) => {
        const paginate = {pageSize: req.query.pageSize|| 10, pageIndex: req.query.pageIndex || 1}
        try{
         const data = await ${importFunction}({},paginate.pageSize, paginate.pageIndex );
         const total = data.length;
         if(!total){
            return res.status(404).send({data:data, message: 'Record not found',links:{current:'', previous:'',next:''}});
         }
         res.status(200).send({data:data, message: 'Record retrived successfully!',links:{current:'', previous:'',next:''}, pagination:{total:total,pageSize: paginate.pageSize, pageIndex: paginate.pageIndex, totalPage: Math.ceil(total/paginate.pageSize)}});
        }
        catch(error){
            console.log(error);
            res.status(500).send(error)
        }
    };`),
    route: (importFunction, path) => (`
router.get('/list', ${importFunction});`)
}, {
    name: "Info",
    service: (name) => (`exports.${name} = (id) => {
        // ${name} logic here...

        return {message: "Found!"}
    }`),
    controller: (importFunction, newFunction, path) => (`const { ${importFunction} } = require('../../${path}');

    exports.${newFunction} = async (req, res) => {
        try{
         const data = await ${importFunction}(req.params.id);
      
         if(!data){
            return res.status(404).send({data:data, message: 'Record not found',links:{current:'', previous:'',next:''}});
         }
         res.status(200).send({data:data, message: 'Record retrived successfully!',links:{current:'', previous:'',next:''}});
        }
        catch(error){
            console.log(error);
            res.status(500).send(error)
        }
    };`),

    route: (importFunction, path) => (`
router.get('/info/:id', ${importFunction});`)
}, {
    name: "Update",
    service: (name) => (`exports.${name} = (data, clue) => {
        // ${name} logic here...

        return {message: "Updated!"}
    }`),
    controller: (importFunction, newFunction, path) => (`const { ${importFunction} } = require('../../${path}');

    exports.${newFunction} =async (req, res) => {
        try{
         const updatedData = await ${importFunction}(req.body, req.params.id);
      
         res.status(200).send({data:newData, message: 'Record update successfully!',links:{current:'', previous:'',next:''}});
        }
        catch(error){
            console.log(error);
            res.status(500).send(error)
        }
    };`),
    route: (importFunction, path) => (`
router.put('/:id', ${importFunction});`)
}, {
    name: "Delete",
    service: (name) => (`exports.${name} = (id) => {
        // ${name} logic here...

        return {message: "Deleted!"}
    }`),
    controller: (importFunction, newFunction, path) => (`const { ${importFunction} } = require('../../${path}');

    exports.${newFunction} =async (req, res) => {
        try{
         const deletedData = await ${importFunction}(req.params.id);
      
         res.status(200).send({data:deletedData, message: 'Record delete successfully!',links:{current:'', previous:'',next:''}});
        }
        catch(error){
            console.log(error);
            res.status(500).send(error)
        }
    };`),
    route: (importFunction, path) => (`
router.delete('/:id', ${importFunction});

`)
}]

module.exports = {handler}