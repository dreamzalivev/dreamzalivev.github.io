const { createApp } = Vue
let id = "";
const currencyCodeOptions = [
    'ALL',
    'DZD',
    'AOA',
    'ARS',
    'AMD',
    'AUD',
    'EUR',
    'AZN',
    'BHD',
    'BBD',
    'BYN',
    'EUR',
    'BMD',
    'BOB',
    'BAM',
    'BWP',
    'BRL',
    'BGN',
    'CVE',
    'KHR',
    'XAF',
    'CAD',
    'KYD',
    'XAF',
    'CLP',
    'CNY',
    'COP',
    'CDF',
    'XAF',
    'CRC',
    'HRK',
    'EUR',
    'CZK',
    'DKK',
    'DOP',
    'USD',
    'EGP',
    'USD',
    'XAF',
    'EUR',
    'ETB',
    'FJD',
    'EUR',
    'EUR',
    'XAF',
    'GEL',
    'EUR',
    'GHS',
    'GIP',
    'EUR',
    'DKK',
    'GTQ',
    'GBP',
    'GYD',
    'HNL',
    'HKD',
    'HUF',
    'ISK',
    'INR',
    'IDR',
    'IQD',
    'EUR',
    'IMP',
    'ILS',
    'EUR',
    'XOF',
    'JMD',
    'JPY',
    'GBP',
    'JOD',
    'KZT',
    'KES',
    'KRW',
    'EUR',
    'KWD',
    'KGS',
    'LAK',
    'EUR',
    'LBP',
    'LYD',
    'CHF',
    'EUR',
    'EUR',
    'MOP',
    'MGA',
    'MWK',
    'MYR',
    'MVR',
    'EUR',
    'MRU',
    'MUR',
    'MXN',
    'MDL',
    'MNT',
    'EUR',
    'MAD',
    'MZN',
    'MMK',
    'NAD',
    'EUR',
    'NZD',
    'NIO',
    'NGN',
    'MKD',
    'NOK',
    'OMR',
    'PKR',
    'ILS, USD, and JOD',
    'PAB and USD',
    'PGK',
    'PYG',
    'PEN',
    'PHP',
    'PLN',
    'EUR',
    'USD',
    'QAR',
    'RON',
    'RUB',
    'RWF',
    'XCD',
    'SAR',
    'XOF',
    'RSD',
    'SGD',
    'EUR',
    'EUR',
    'ZAR',
    'EUR',
    'LKR',
    'SZL',
    'SEK',
    'CHF',
    'TWD',
    'TJS',
    'TZS',
    'THB',
    'USD',
    'TTD',
    'TND',
    'TRY',
    'TMT',
    'UGX',
    'UAH',
    'AED',
    'GBP',
    'USD',
    'UYU',
    'UZS',
    'VEF',
    'VND',
    'ZMW',
    'ZWD'
]
const currencyNameOptions = [
    'Albania -  lek',
    'Algeria -  dinar',
    'Angola -  kwanza',
    'Argentina -  peso',
    'Armenia -  dram',
    'Australia -  dollar',
    'Austria -  euro',
    'Azerbaijan -  manat',
    'Bahrain -  dinar',
    'Barbados -  dollar',
    'Belarus -  rouble',
    'Belgium -  euro',
    'Bermuda -  dollar',
    'Bolivia -  boliviano',
    'Bosnia and Herzegovina -  konvertibilna marka',
    'Botswana -  pula',
    'Brazil -  real',
    'Bulgaria -  lev',
    'Cabo Verde -  escudo',
    'Cambodia -  riel',
    'Cameroon, Republic of -  CFA franc BEAC',
    'Canada -  dollar',
    'Cayman Islands -  dollar',
    'Chad -  CFA franc BEAC',
    'Chile -  peso',
    'China, People`s Republic of -  yuan',
    'Colombia -  peso',
    'Congo, Democratic Republic of the -  franc',
    'Congo, Republic of -  CFA franc BEAC',
    'Costa Rica -  colon',
    'Croatia -  kuna',
    'Cyprus -  euro',
    'Czech Republic -  koruna',
    'Denmark -  kroner',
    'Dominican Republic -  peso',
    'Ecuador -  dollar',
    'Egypt -  pound',
    'El Salvador -  dollar',
    'Equatorial Guinea -  CFA franc BEAC',
    'Estonia -  euro',
    'Ethiopia -  birr',
    'Fiji -  dollar',
    'Finland -  euro',
    'France -  euro',
    'Gabon -  CFA franc BEAC',
    'Georgia -  lari',
    'Germany -  euro',
    'Ghana -  cedi',
    'Gibraltar -  pound',
    'Greece -  euro',
    'Greenland -  Danish krone',
    'Guatemala -  quetzal',
    'Guernsey, Channel Islands -  British pound sterling',
    'Guyana -  dollar',
    'Honduras -  lempira',
    'Hong Kong SAR -  dollar',
    'Hungary -  forint',
    'Iceland -  krona',
    'India -  rupee',
    'Indonesia -  rupiah',
    'Iraq -  dinar',
    'Ireland -  euro',
    'Isle of Man -  pound',
    'Israel -  shekel',
    'Italy -  euro',
    'Ivory Coast (Cote d`Ivoire) -  CFA franc BCEAO',
    'Jamaica -  dollar',
    'Japan -  yen',
    'Jersey, Channel Islands -  British pound sterling',
    'Jordan -  dinar',
    'Kazakhstan -  tenge',
    'Kenya -  shilling',
    'Korea, Republic of -  won',
    'Kosovo -  euro',
    'Kuwait -  dinar',
    'Kyrgyzstan -  som',
    'Lao PDR -  kip',
    'Latvia -  euro',
    'Lebanon -  pound',
    'Libya -  dinar',
    'Liechtenstein -  franc',
    'Lithuania -  euro',
    'Luxembourg -  euro',
    'Macau SAR -  pataca',
    'Madagascar -  ariary',
    'Malawi -  kwacha',
    'Malaysia -  ringgit',
    'Maldives, Republic of -  rufiyaa',
    'Malta -  euro',
    'Mauritania -  ouguiya',
    'Mauritius -  rupee',
    'Mexico -  peso',
    'Moldova -  leu',
    'Mongolia -  tugrik',
    'Montenegro -  euro',
    'Morocco -  dirham',
    'Mozambique -  metical',
    'Myanmar -  kyat',
    'Namibia, Republic of -  dollar',
    'Netherlands -  euro',
    'New Zealand -  dollar',
    'Nicaragua -  cordoba oro',
    'Nigeria -  naira',
    'North Macedonia -  denar',
    'Norway -  kroner',
    'Oman -  rial',
    'Pakistan -  rupee',
    'Palestinian territories -  shekel, dollar, and dinar',
    'Panama -  balboa and dollar',
    'Papua New Guinea -  kina',
    'Paraguay -  guarani',
    'Peru -  nuevo sol',
    'Philippines -  peso',
    'Poland -  zloty',
    'Portugal -  euro',
    'Puerto Rico -  dollar',
    'Qatar -  riyal',
    'Romania -  leu',
    'Russian Federation -  ruble',
    'Rwanda -  franc',
    'Saint Lucia -  dollar',
    'Saudi Arabia -  riyal',
    'Senegal -  CFA franc BCEAO',
    'Serbia -  dinar',
    'Singapore -  dollar',
    'Slovak Republic -  euro',
    'Slovenia -  euro',
    'South Africa -  rand',
    'Spain -  euro',
    'Sri Lanka -  rupee',
    'Swaziland -  lilangeni',
    'Sweden -  krona',
    'Switzerland -  franc',
    'Taiwan -  dollar',
    'Tajikistan -  somoni',
    'Tanzania -  shilling',
    'Thailand -  baht',
    'Timor-Leste -  US dollar',
    'Trinidad And Tobago -  dollar',
    'Tunisia -  dinar',
    'Turkey -  lira',
    'Turkmenistan -  manat',
    'Uganda -  shilling',
    'Ukraine -  hryvnia',
    'United Arab Emirates -  dirham',
    'United Kingdom -  sterling',
    'United States -  dollar',
    'Uruguay -  peso',
    'Uzbekistan, Republic of -  soum',
    'Venezuela -  bolivar',
    'Vietnam -  dong',
    'Zambia -  kwacha',
    'Zimbabwe -  dollar',
];
const templateOptions = {
    tableCols: [
        {
            id: id++,
            title: 'S.N.',
            getData: function (rowData, colIndex, rowIndex) {
                return rowIndex + 1
            }
        },
        {
            id: id++,
            title: 'Description of Goods',
            editable: true,
            editControlStyle: { width: '150px' }
        },
        {
            id: id++,
            title: 'HSN/SAC Code',
            editable: true,
            editControlStyle: { width: '150px' }
        },
        {
            id: id++,
            title: 'Qty.',
            type: 'number',
            editControlStyle: { width: '50px' },
            editable: true,
            getData: function (rowData, colIndex, rowIndex) {
                return app.toFixed(rowData[3])
            }
        },
        {
            id: id++,
            title: 'Unit',
            getData: function (rowData, colIndex, rowIndex) {
                return app.selectedUnit
            }
        },
        {
            id: id++,
            title: 'Price',
            editable: true,
            type: 'number',
            editControlStyle: { width: '100px' },
            getData: function (rowData, colIndex, rowIndex) {
                return app.formatCurrency(rowData[5])
            }
        },
        {
            id: id++,
            title: 'CGST Rate',
            editable: true,
            type: 'options',
            editControlStyle: { width: '75px' },
            options: function () {
                return app.taxOptions
            },
            getData: function (rowData, colIndex, rowIndex) {
                return app.toFixed(app.getRate(rowData)) + '%'
            }
        },
        {
            id: id++,
            title: 'CGST Amount',
            getData: function (rowData, colIndex, rowIndex) {
                return app.formatCurrency(app.getAmount(rowData))
            }
        },
        {
            id: id++,
            title: 'SGST Rate',
            getData: function (rowData, colIndex, rowIndex) {
                return app.toFixed(app.getRate(rowData)) + '%'
            }
        },
        {
            id: id++,
            title: 'SGST Amount',
            getData: function (rowData, colIndex, rowIndex) {
                return app.formatCurrency(app.getAmount(rowData))
            }
        },
        {
            id: id++,
            title: 'Amount',
            getData: function (rowData, colIndex, rowIndex) {
                return app.formatCurrency((rowData[3] * rowData[5]) + (app.getAmount(rowData) * 2))
            }
        }
    ],
    taxCols: [
        {
            id: id++,
            title: 'Tax Rate'
        },
        {
            id: id++,
            title: 'Taxable Amt.'
        },
        {
            id: id++,
            title: 'CGST Amt.'
        },
        {
            id: id++,
            title: 'SGST Amt.'
        },
        {
            id: id++,
            title: 'Total Tax'
        }
    ],
    tableData: [

    ],
    editableRows: []
}
var app = createApp({
    data() {
        return {
            showBilling: false,
            companyName: 'Dreamzalive',
            companyEmail: '',
            sourceGSTIN: '12345',
            addressLine1: '',
            addressLine2: '',
            tel: '',
            selectedUnit: 'Pcs.',
            billStatus: 'Unpaid',
            taxItems: '5,12',
            selectedCurrency: 'INR',
            billTo: '',
            billToBank: 'CASH',
            options: templateOptions
        }
    },
    methods: {
        addItem() {
            this.options.editableRows.push(true)
            this.options.tableData.push([]);
        },
        saveItem(rowIndex) {
            this.options.editableRows[rowIndex] = false
        },
        editItem(rowIndex) {
            this.options.editableRows[rowIndex] = true
        },
        deleteItem(rowIndex) {
            this.options.editableRows.splice(rowIndex, 1);
            this.options.tableData.splice(rowIndex, 1);
        },
        getRate(rowData) {
            return (rowData[6] / 2)
        },
        getAmount(rowData) {
            return ((rowData[3] * rowData[5]) * this.getRate(rowData)) / 100
        },
        toFixed(num) {
            return Number(num).toFixed(2)
        },
        formatCurrency(num) {
            return Number(num).toLocaleString('en-US', {
                style: 'currency',
                currency: this.selectedCurrency,
            })
        },
        groupBy(list, keyGetter) {
            const map = new Map();
            list.forEach((item) => {
                const key = keyGetter(item);
                const collection = map.get(key);
                if (!collection) {
                    map.set(key, [item]);
                } else {
                    collection.push(item);
                }
            });
            return map;
        },
        toggleBill() {
            app.showBilling = !app.showBilling;
        },
        formatBreakLine(detail) {
            return detail.replace(new RegExp('\r?\n', 'g'), '<br />');
        },
        numInWords(number) {
            if (!number) { return; }
            const first = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
            const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
            const mad = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];
            let word = '';

            for (let i = 0; i < mad.length; i++) {
                let tempNumber = number % (100 * Math.pow(1000, i));
                if (Math.floor(tempNumber / Math.pow(1000, i)) !== 0) {
                    if (Math.floor(tempNumber / Math.pow(1000, i)) < 20) {
                        word = first[Math.floor(tempNumber / Math.pow(1000, i))] + mad[i] + ' ' + word;
                    } else {
                        word = tens[Math.floor(tempNumber / (10 * Math.pow(1000, i)))] + ' ' + first[Math.floor(tempNumber / Math.pow(1000, i)) % 10] + mad[i] + ' ' + word;
                    }
                }

                tempNumber = number % (Math.pow(1000, i + 1));
                if (Math.floor(tempNumber / (100 * Math.pow(1000, i))) !== 0) word = first[Math.floor(tempNumber / (100 * Math.pow(1000, i)))] + 'Hunderd ' + word;
            }
            return word + " Only";
        }
    },
    computed: {
        taxOptions() {
            const items = [];
            app.taxItems.split(',').forEach(item => {
                items.push({ text: item, value: item })
            })
            return items;
        },
        getTotal() {
            let total = 0;
            if (Array.isArray(this.options.tableData)) {
                this.options.tableData.forEach(data => {
                    total += (this.getAmount(data) * 2 + (data[5] * data[3]));
                })
            }
            return total;
        },
        getCurrencyCodes() {
            let codes = [];
            for (let index = 0; index < currencyNameOptions.length; index++) {
                const currencyName = currencyNameOptions[index];
                const currencyCode = currencyCodeOptions[index];
                codes.push({ code: currencyCode, name: currencyName })
            }
            return codes;
        },
        getTotalUnits() {
            return this.options.tableData ? this.toFixed(this.options.tableData.map(x => x[3]).reduce((partialSum, a) => partialSum + a, 0)) : 0
        },
        getTaxData() {
            const taxItems = this.getTaxDataModel;
            const items = [];
            taxItems.forEach(item => {
                items.push([
                    item[0] + "%",
                    app.formatCurrency(item[1]),
                    app.formatCurrency(item[2]),
                    app.formatCurrency(item[3]),
                    app.formatCurrency(item[4])
                ])
            })
            return items
        },
        getTotalTax() {
            const items = this.getTaxDataModel;
            const total = { totalTaxAmt: 0, stateCenterTax: 0, totalTax: 0 };
            items.forEach(item => {
                total.totalTaxAmt += item[1];
                total.stateCenterTax += item[2];
                total.totalTax += item[4];
            })
            return total
        },
        getTaxDataModel() {
            const items = [];
            if (Array.isArray(this.options.tableData)) {
                this.groupBy(this.options.tableData, data => data[6]).forEach((dataItems, key) => {
                    if (!key) { return; }
                    let totalTaxAmt = 0;
                    dataItems.forEach(data => {
                        totalTaxAmt += data[3] * data[5]
                    })
                    const totalTax = (totalTaxAmt * key) / 100;
                    const stateCenterTax = totalTax / 2;
                    items.push([
                        key,
                        totalTaxAmt,
                        stateCenterTax,
                        stateCenterTax,
                        totalTax
                    ])
                })
            }
            return items
        }
    },
    mounted() {
        this.options = templateOptions
    }
}).mount('#app')