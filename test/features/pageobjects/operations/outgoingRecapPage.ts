export default new class outgoingRecapPage {
    
    //List 
    get titlePage() {
    return $('(//*[@class="s_qzwtq9Zy"])')
    }
    get btnSearch() {
        return $('(//*[@id="btnSearch"])')
    }
    get fieldInputSearch() {
        return $('//input[@placeholder="Search..."]')
    }
    get btnCari() {
        return $('//span[@data-id="enter-btn"]');
    }
    get textKodeInvoice() {
        return $('(//*[contains(text(), "T241014-777")])')
    }
     


}