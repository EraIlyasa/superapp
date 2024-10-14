@Purchasing-Purchase-Order-Edit-Status
Feature: Create - Purchase Order 

##BEFORE INCOMING GOODS##
@PO-0061
Scenario Outline: Memastikan Create PO berhasil disimpan dengan status set
When api user login
And User create PO API finished goods "<metodePembayaran>" 
And User get kode invoice purchase order
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click "menuPurchasingPO" button in "PO" page
And User wait for 10 seconds
Then User get element status id
And User wait for 5 seconds

Examples: 
|metodePembayaran|
|transfer        |

@PO-0062
Scenario Outline: Memastikan Request payment berhasil untuk PO dengan payment method cod
When api user login
And User create PO API finished goods "<metodePembayaran>" 
And User get kode invoice purchase order
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click "menuPurchasingPO" button in "PO" page
And User wait for 10 seconds
Then User get element status id
And User wait for 5 seconds

Examples: 
|metodePembayaran|
|transfer        |

@PO-0063
Scenario Outline: Memastikan Request payment berhasil untuk PO dengan payment method cod
When api user login
And User create PO API finished goods "<metodePembayaran>" 
And User get kode invoice purchase order
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click "menuPurchasingPO" button in "PO" page
And User wait for 10 seconds
Then User get element status id
And User wait for 5 seconds

Examples: 
|metodePembayaran|
|cod             |

@PO-0064
Scenario Outline: Memastikan Request payment berhasil untuk PO dengan payment method TF grandtotal =0
When api user login
And User create PO API finished goods "<metodePembayaran>" grand total 0 
And User get kode invoice purchase order
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click "menuPurchasingPO" button in "PO" page
And User wait for 10 seconds
Then User get element status id
And User wait for 5 seconds

Examples: 
|metodePembayaran|
|transfer        |

@PO-0065
Scenario Outline: Memastikan Request payment berhasil untuk PO dengan payment method COD grandtotal =0
When api user login
And User create PO API finished goods "<metodePembayaran>" grand total 0 
And User get kode invoice purchase order
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click "menuPurchasingPO" button in "PO" page
And User wait for 10 seconds
Then User get element status id
And User wait for 5 seconds

Examples: 
|metodePembayaran|
|cod             |

@PO-0066
Scenario Outline: Memastikan Request payment berhasil untuk PO dengan payment method Tempo grandtotal =0
When api user login
And User create PO API finished goods "<metodePembayaran>" grand total 0 
And User get kode invoice purchase order
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click "menuPurchasingPO" button in "PO" page
And User wait for 10 seconds
Then User get element status id
And User wait for 5 seconds

Examples: 
|metodePembayaran|
|tempo           |

@PO-0067
Scenario Outline: Memastikan  berhasil melakukan approve di payment request(Paymnet method COD)
When api user login
And User create PO API finished goods "<metodePembayaran>" 
And User get kode invoice purchase order
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click "menuPurchasingPO" button in "PO" page
And User wait for 10 seconds
Then User get element status id
And User wait for 5 seconds
And User click "btnDetailRow0" button in "PO" page
And User click "btnPrepayment" button in "PO" page
And User click "btnSimpanRPModal" button in request payment modal
Then User able to see successfull "Data has been updated" message verification
And User wait for 5 seconds

Examples: 
|metodePembayaran|
|cod             |

@PO-0068
Scenario Outline: Memastikan  berhasil melakukan approve di payment request(Paymnet method COD)
When api user login
And User create PO API finished goods "<metodePembayaran>" 
And User get kode invoice purchase order
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click "menuPurchasingPO" button in "PO" page
And User wait for 10 seconds
Then User get element status id
And User wait for 5 seconds
And User click "btnDetailRow0" button in "PO" page
And User click "btnPrepayment" button in "PO" page
And User click "btnSimpanRPModal" button in request payment modal
Then User able to see successfull "Data has been updated" message verification
And User wait for 5 seconds

Examples: 
|metodePembayaran|
|transfer        |

@PO-0069
Scenario Outline: Memastikan  berhasil melakukan pembayaran di payment request(Paymnet method COD)
When api user login
And User create PO API finished goods "<metodePembayaran>" 
And User get kode invoice purchase order
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click "menuPurchasingPO" button in "PO" page
And User wait for 10 seconds
Then User get element status id
And User wait for 5 seconds
And User click "btnDetailRow0" button in "PO" page
And User click "btnPrepayment" button in "PO" page
And User click "btnSimpanRPModal" button in request payment modal
Then User able to see successfull "Data has been updated" message verification
And User wait for 5 seconds
Given User get dashboard url
Given User click menu "navMenuFinance" in side menu page
And User click submenu "menuPaymentRequest" in side menu page
And User click btnSearch in payment request page
And User input kode invoice into fieldInputSearch in payment request
And User click btnCari in payment request page

Then User verify status payment request "before"
And User wait for 5 seconds
And User click btnDetail in payment request page
And User click btnSetujui in detail payment request
And User click btnSimpanSR in setujui modal
And User click btnSetujui in detail payment request

And User input "<pembayar>" into inputFieldPaidByModal
And User upload invoice into imgUpload
And User click btnSelesaikanModal in detail payment request
Then User able to see successfull "Data has been updated" message verification
Given User get url to payment request page
And User click btnSearch in payment request page
And User input kode invoice into fieldInputSearch in payment request
And User click btnCari in payment request page
Then User verify status payment request "after"
And User wait for 5 seconds

Examples: 
|metodePembayaran| pembayar   |
|cod             | Putri Zizi |

@PO-0070
Scenario Outline: Memastikan  berhasil melakukan pembayaran di payment request(Paymnet method COD)
When api user login
And User create PO API finished goods "<metodePembayaran>" 
And User get kode invoice purchase order
When api user login
When open dashboard superapp
When User click "navMenuPurchasing" button in "Global" page
And User click "menuPurchasingPO" button in "PO" page
And User wait for 10 seconds
Then User get element status id
And User wait for 5 seconds
And User click "btnDetailRow0" button in "PO" page
And User click "btnPrepayment" button in "PO" page
And User click "btnSimpanRPModal" button in request payment modal
Then User able to see successfull "Data has been updated" message verification
And User wait for 5 seconds
Given User get dashboard url
Given User click menu "navMenuFinance" in side menu page
And User click submenu "menuPaymentRequest" in side menu page
And User click btnSearch in payment request page
And User input kode invoice into fieldInputSearch in payment request
And User click btnCari in payment request page

Then User verify status payment request "before"
And User wait for 5 seconds
And User click btnDetail in payment request page
And User click btnSetujui in detail payment request
And User click btnSimpanSR in setujui modal
And User click btnSetujui in detail payment request

And User input "<pembayar>" into inputFieldPaidByModal
And User upload invoice into imgUpload
And User click btnSelesaikanModal in detail payment request
Then User able to see successfull "Data has been updated" message verification
Given User get url to payment request page
And User click btnSearch in payment request page
And User input kode invoice into fieldInputSearch in payment request
And User click btnCari in payment request page
Then User verify status payment request "after"
And User wait for 5 seconds

Examples: 
|metodePembayaran| pembayar   |
|transfer        | Putri Zizi |
