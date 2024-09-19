import { $ } from '@wdio/globals';

export default new class sideMenuBarPage {

    get order(){ 
        return $('//span[contains(text(),"Order")]');
    }

    get penjualan(){ 
        return $('//span[@class="ant-menu-title-content"]/a[@data-testid="Menu-Penjualan"]');
    }

    get logistic(){ 
        return $('//span[@data-testid="Menu-Logistic"]');
    }

    get newOutgoingGoods() {
        return $('//span[@class="ant-menu-title-content"]/a[@data-testid="Menu-OutgoingGoods V4"]')
    }

    get outgoingGoodsV3() {
        return $('//span[@class="ant-menu-title-content"]/a[@data-testid="menu-New Outgoing Goods"]')
    }

}