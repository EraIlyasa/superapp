//Menu "Marketing"

//Notification

class Notification{

    get navMenuMarketing(){
        return $('//*[@data-testid="Menu-Marketing"]');
    }
    //Page Auto Notifications
    get navMenuAutoNotification(){
        return $('//*[@data-testid="menu-Auto Notification"]');
    }
    get iconSearchClick(){
        return $('//*[@id="btnSearch"]/span');
    }
    get inputSearch(){
        return $('//*[@data-testid="search-bar"]');
    }
    get filterPeriodeDefault() {
        return $(`//span[@class='ant-select-selection-item' and @title='Hari ini']`);
    }
    
    get filterPeriodeMonths() {
        return $(`//div[@class='ant-select-item-option-content' and text()='Bulan ini']`);
    }
    // get filterPeriodeDefault() {
    //     return $(`//span[@class='ant-select-selection-item' and @title='Custom']`);
    // }
    get cancelCalender() {
        return $(` //button[@data-id='day-picker-cancel-btn']`);
    } 
    get okeCalender() {
        return $(`//button[@data-id='day-picker-oke-btn']`);
    }

    get tabTransaksi(){
        return $('//*[@data-testid="tab-transaksi-btn"]');

    }
    get tabVoucher(){
        return $('//*[@data-testid="tab-voucher-btn"]');

    }
    get tabInformasi(){
        return $('//*[@data-testid="tab-informasi-btn"]');

    }

   
}
export default new Notification();
