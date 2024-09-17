export default new class deeplink{

    get navMenuMarketing(){
        return $('//*[@data-testid="Menu-Marketing"]');
    }

    get menuCMSV4(){
        return $('//*[@class="ant-menu-title-content"]/*[@data-testid="Menu-CMSV4"]');
    }

    get menuDeeplink(){
        return $('//*[@data-testid="Menu-DeepLink"]');
    }

    get btnBuatDeeplink(){
        return $('//*[@data-testid="add-deep-link-btn"]');
    }

    get inputNamaDeeplink(){
        return $('//*[@placeholder="Masukkan Nama Page"]');
    }

    get inputLinkDeeplink(){
        return $('//*[@placeholder="Masukan link"]');
    }

    get btnSimpanDeeplink(){
        return $('(//*[@class="ant-btn css-1vp3ixv ant-btn-primary ant-btn-lg Button_button__QU6uO Button_solid__yWcC4 Button_large__Z_hZd"])[1]');
    }

    get alertEmpty(){
        return $('SingleTextField_helper__1ejhl SingleTextField_error__1Vust SingleTextField_withCount__pGt7s');
    }
}