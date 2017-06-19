const _ = require('lodash'),
{ GraphQLString, GraphQLInt, GraphQLID, GraphQLFloat, GraphQLObjectType, 
  GraphQLBoolean } = require('graphql'),
  
  Items = require('../data/items'),
  ItemType = require('./itemType.js');

const InvoiceType = new GraphQLObjectType({
  name: 'Invoices',
  description: 'An Invoice',
  fields: {
    invoice_number: { type: GraphQLString },
    item_id: { type: GraphQLID },
    invoice_id: { type: GraphQLID },
    customer_name: { type: GraphQLString },
    customer_id: { type: GraphQLID },
    status: { type: GraphQLString },
    reference_number: { type: GraphQLString },
    date: { type: GraphQLString },
    due_date: { type: GraphQLString },
    due_days: { type: GraphQLString },
    currency_id: { type: GraphQLID },
    currency_code: { type: GraphQLString },
    total: { type: GraphQLFloat},
    balance: { type: GraphQLFloat},
    created_time: { type: GraphQLString },
    is_emailed: { type: GraphQLBoolean },
    reminders_sent: { type: GraphQLInt},
    payment_expected_date: { type: GraphQLString },
    last_payment_date: { type: GraphQLString },
    item: {
      type: ItemType,
      resolve: item => _.find(Items, i => i.item_id == item.item_id)
    }
  }
});

module.exports = InvoiceType;