const _ = require('lodash'),
{ GraphQLID, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLNonNull,
  GraphQLObjectType, GraphQLInputObjectType, GraphQLEnumType, GraphQLSchema } = require('graphql'),
  
  Items = require('./data/items'),
  Invoices = require('./data/invoices'),
  ItemType = require('./schemas/itemType'),
  InvoiceType = require('./schemas/invoiceType'),
  { ItemFilter, ItemsFilter, InvoiceFilter } = require('./filters');

// Root Query
const InventoryAPIQueryType = new GraphQLObjectType({
  name: 'InventoryAPIQueryType',
  description: 'Inventory API Query Schema',
  fields: {
    getItem: {
      type: ItemType,
      description: 'Retrieve an Item',
      args: { 
        filter: { type: new GraphQLNonNull(ItemFilter) }
      },
      resolve: (source, {filter}) => {
        if (filter.item_id) {
          return _.find(Items, i => i.item_id == filter.item_id);
        }
        else if (filter.tax_id) {
          return _.find(Items, i => i.tax_id == filter.tax_id);
        }
        else { return; }
      }
    },
    getItems: {
      type: new GraphQLList(ItemType),
      description: 'List Items',
      args: { 
        filter: { type: ItemsFilter },
        first: { type: GraphQLInt },
        last: { type: GraphQLInt }
      },
      resolve: (source, {filter, first, last}) => {
        if(filter) {
          if (filter.group_id) {
            return _.filter(Items, i => i.group_id == filter.group_id);
          }
          if (filter.vendor_id) {
            return _.filter(Items, i => i.vendor_id == filter.vendor_id);
          }
        }
        if (first) {
          return _.slice(Items, 0, first);
        } 
        if (last) {
          return _.slice(Items, 0, last).reverse();
        }
        else { return Items }
      }
    },
    getInvoice: {
      type: InvoiceType,
      description: 'Retrieve an Invoice',
      args: {
        invoice_id: { type: GraphQLID },
        invoice_number: { type: GraphQLString },
        item_id: { type: GraphQLID }
      },
      resolve: (source, args) => {
        if (args.invoice_id){
          return _.find(Invoices, inv => inv.invoice_id == args.invoice_id);
        }
        else if (args.invoice_number){
          return _.find(Invoices, inv => inv.invoice_number == args.invoice_number);
        }
        else if (args.item_id){
          return _.find(Invoices, inv => inv.item_id == args.item_id);
        }
        else { return; }
      }
    },
    getInvoices: {
      type: new GraphQLList(InvoiceType),
      description: 'List Invoices',
      resolve: () => Invoices
    }
  }
});

// GraphQL Schema declaration
const InventoryAPISchema = new GraphQLSchema({
  query: InventoryAPIQueryType
});

module.exports = InventoryAPISchema;