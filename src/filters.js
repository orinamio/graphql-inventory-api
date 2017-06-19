const { GraphQLID, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLBoolean, 
  GraphQLInputObjectType, GraphQLEnumType } = require('graphql');

const ItemFilter = new GraphQLInputObjectType({
  name: 'ItemFilter',
  fields: {
    item_id: { type: GraphQLID },
    tax_id: { type: GraphQLID },
  }
});
const ItemsFilter = new GraphQLInputObjectType({
  name: 'ItemsFilter',
  fields: {
    group_id: { type: GraphQLID },
    vendor_id: { type: GraphQLID }
  }
});

const InvoiceFilter = new GraphQLInputObjectType({
  name: 'InvoiceFilter',
  fields: {
    invoice_id: { type: GraphQLID },
    invoice_number: { type: GraphQLString },
    item_id: { type: GraphQLID }
  }
});

module.exports = { ItemFilter, ItemsFilter, InvoiceFilter }