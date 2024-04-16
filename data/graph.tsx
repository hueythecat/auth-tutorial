
import { promises as fs } from 'fs';

export function readLocalData() {
    console.log('called: ',process.cwd() + '/app/graph.json');
    //const data = fs.readFile(process.cwd() + '/app/graph.json', 'utf8');

   //console.log('data',data);
    // Use the 'data' variable here
    return [
        {
            "day_of_month" : 1,
            "count_for_day" : 3,
            "monthPayments" : 2,
            "monthPurchases" : 1,
            "monthCancelled" : 0,
            "annualPayments" : 0,
            "annualPurchases" : 0,
            "annualCancelled" : 0
        },
        {
            "day_of_month" : 2,
            "count_for_day" : 5,
            "monthPayments" : 3,
            "monthPurchases" : 2,
            "monthCancelled" : 1,
            "annualPayments" : 0,
            "annualPurchases" : 0,
            "annualCancelled" : 0
        },
        {
            "day_of_month" : 3,
            "count_for_day" : 8,
            "monthPayments" : 0,
            "monthPurchases" : 5,
            "monthCancelled" : 0,
            "annualPayments" : 1,
            "annualPurchases" : 2,
            "annualCancelled" : 1
        },
        {
            "day_of_month" : 4,
            "count_for_day" : 4,
            "monthPayments" : 1,
            "monthPurchases" : 3,
            "monthCancelled" : 0,
            "annualPayments" : 0,
            "annualPurchases" : 0,
            "annualCancelled" : 0
        },
        {
            "day_of_month" : 5,
            "count_for_day" : 10,
            "monthPayments" : 0,
            "monthPurchases" : 5,
            "monthCancelled" : 2,
            "annualPayments" : 0,
            "annualPurchases" : 5,
            "annualCancelled" : 0
        },
        {
            "day_of_month" : 6,
            "count_for_day" : 9,
            "monthPayments" : 0,
            "monthPurchases" : 9,
            "monthCancelled" : 1,
            "annualPayments" : 0,
            "annualPurchases" : 0,
            "annualCancelled" : 0
        },
        {
            "day_of_month" : 7,
            "count_for_day" : 13,
            "monthPayments" : 0,
            "monthPurchases" : 12,
            "monthCancelled" : 3,
            "annualPayments" : 0,
            "annualPurchases" : 1,
            "annualCancelled" : 0
        },
        {
            "day_of_month" : 8,
            "count_for_day" : 6,
            "monthPayments" : 0,
            "monthPurchases" : 5,
            "monthCancelled" : 0,
            "annualPayments" : 0,
            "annualPurchases" : 1,
            "annualCancelled" : 0
        },
        {
            "day_of_month" : 9,
            "count_for_day" : 10,
            "monthPayments" : 1,
            "monthPurchases" : 9,
            "monthCancelled" : 1,
            "annualPayments" : 0,
            "annualPurchases" : 0,
            "annualCancelled" : 0
        },
        {
            "day_of_month" : 10,
            "count_for_day" : 3,
            "monthPayments" : 0,
            "monthPurchases" : 2,
            "monthCancelled" : 0,
            "annualPayments" : 0,
            "annualPurchases" : 1,
            "annualCancelled" : 0
        },
        {
            "day_of_month" : 11,
            "count_for_day" : 6,
            "monthPayments" : 0,
            "monthPurchases" : 3,
            "monthCancelled" : 0,
            "annualPayments" : 0,
            "annualPurchases" : 3,
            "annualCancelled" : 0
        },
        {
            "day_of_month" : 12,
            "count_for_day" : 5,
            "monthPayments" : 0,
            "monthPurchases" : 5,
            "monthCancelled" : 1,
            "annualPayments" : 0,
            "annualPurchases" : 0,
            "annualCancelled" : 0
        },
        {
            "day_of_month" : 13,
            "count_for_day" : 6,
            "monthPayments" : 3,
            "monthPurchases" : 3,
            "monthCancelled" : 1,
            "annualPayments" : 0,
            "annualPurchases" : 0,
            "annualCancelled" : 0
        },
        {
            "day_of_month" : 14,
            "count_for_day" : 2,
            "monthPayments" : 0,
            "monthPurchases" : 2,
            "monthCancelled" : 0,
            "annualPayments" : 0,
            "annualPurchases" : 0,
            "annualCancelled" : 0
        },
        {
            "day_of_month" : 15,
            "count_for_day" : 5,
            "monthPayments" : 2,
            "monthPurchases" : 3,
            "monthCancelled" : 1,
            "annualPayments" : 0,
            "annualPurchases" : 0,
            "annualCancelled" : 0
        }
    ];
    
    
}


