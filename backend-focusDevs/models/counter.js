const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id:"product_id",
    seq: 0
})

module.exports = mongoose.model('products', productSchema);

/*function getValueForNextSequence(sequenceOfName) {

    var sequenceDoc = db.sample.findAndModify({
        query: { _id: sequenceOfName },
        update: { $inc: { sequence_value: 1 } },
        new: true
    });

    return sequenceDoc.sequence_value;
}*/