const { GraphQLString, GraphQLInt, GraphQLID, GraphQLFloat, GraphQLBoolean, GraphQLObjectType } = require('graphql');

const ItemType = new GraphQLObjectType({
  name: 'Items',
  description: 'An Item',
  fields: {
    group_id: { type: GraphQLID },
    group_name: { type: GraphQLString },
    unit: { type: GraphQLString },
    item_type: { type: GraphQLString },
    product_type: { type: GraphQLString },
    is_taxable: { type: GraphQLBoolean },
    tax_id: { type: GraphQLID },
    description: { type: GraphQLString },
    tax_name: { type: GraphQLString },
    tax_percentage: { type: GraphQLFloat },
    tax_type: { type: GraphQLString },
    status: { type: GraphQLString },
    item_id: { type: GraphQLID },
    item_name: { type: GraphQLString },
    rate: { type: GraphQLFloat },
    pricebook_rate: { type: GraphQLFloat },
    purchase_rate: { type: GraphQLFloat },
    reorder_level: { type: GraphQLInt},
    initial_stock: { type: GraphQLInt},
    initial_stock_rate: { type: GraphQLFloat},
    vendor_id: { type: GraphQLID },
    vendor_name: { type: GraphQLString },
    stock_on_hand: { type: GraphQLInt},
    sku: { type: GraphQLString },
    image_id: { type: GraphQLID },
    image_name: { type: GraphQLString },
    purchase_description: { type: GraphQLString },
    image_type: { type: GraphQLString }
  }
});

module.exports = ItemType;