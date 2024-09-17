export default new class flashsalePage {

    //
    get navMenuMarketing() { return $('//*[@data-testid="Menu-Marketing"]'); }
    get menuFlashsaleV4() { return $('//*[@data-testid="Menu-FlashsaleV4"]'); }


    //List 
    get fieldInputSearch() { return $('//*[@placeholder="Cari nama flash sale"]'); }
    get btnWarehouse() { return $('//*[@class="Table_filterContainer__WbWjE"]/*[1]'); }
    get btnArea() { return $('//*[@class="Table_filterContainer__WbWjE"]/*[2]'); }
    get btnStatus() { return $('//*[@class="Table_filterContainer__WbWjE"]/*[3]'); }
    get btnBuatFlashsale() { return $('//*[contains(text(), "Buat Flash Sale")]'); }
    get btnXpanArrow() { return $('//*[@class="ant-table-row ant-table-row-level-0 Table_tableRowClassname__a3AXN"][1]/*[1]/*'); }
    get btnDetailFlashsale() { return $('//*[@class="ant-table-row ant-table-row-level-0 Table_tableRowClassname__a3AXN"][1]/*[2]/*/*[2]'); }
    get btnLihatArea() { return $('(//*[contains(text(), "Lihat Area")])[1]'); }
    get allertUploadBanner() { return $('//*[@class="UploadArea_errorMsg__GW9EU"]'); }

    //Filter Modal 
    get filterBtnModalWarehouse() { return $('//*[@data-node-key="warehouse_id"]'); }
    get filterBtnModalArea() { return $('//*[@data-node-key="area"]')}
    get filterBtnModalStatus() { return $('//*[@data-node-key="status"]')}
    get btnModalReset() { return $('//*[@data-testid="modal-reset-filter"]'); }
    get btnModalTerapkan() { return $('//*[@data-testid="modal-apply-filter"]'); }
    get btnModalClose() { return $('//*[@class="ModalHalfFrame_modalCloseIcon__yieRt"]'); }

    //Filter ModalWarehouse
    get fieldInputSearchModalWarehouse() { return $('//*[@placeholder="Cari nama gudang"]'); }
    get radioBtnModalWarehouse0() { return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])[1]/*[1]'); }
    get radioBtnModalWarehouse1() { return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])[1]/*[2]'); }

    //Filter ModalArea
    get fieldInputSearchModalArea() { return $('//*[@placeholder="Cari area"]'); }
    get radioBtnModalArea0() { return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])[2]/*[1]'); }
    get radioBtnModalArea1() { return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])[2]/*[2]')}

    //Filter ModalStatus
    get radioBtnModalAllStatus0() { return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])[3]/*[1]'); }
    get radioBtnModalDraft() { return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])[3]/*[2]'); }
    get radioBtnModalPublished() { return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])[3]/*[3]'); }
    get radioBtnModalCompleted() { return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])[3]/*[4]'); }
    get radioBtnModalCancelled() { return $('(//*[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup__uhLeH Radio_radioGroupContainer__hePaF Radio_vertical__xq9kx css-1vp3ixv"])[3]/*[5]')}


    //Detail Page Section 1 
    get uploadGambar() { return $('//*[@data-testid="form-file-upload-image"]'); }
    get clickGambar() { return $('//*[@class="ant-upload"]'); }
    get fieldInputWarehouse() { return $('(//*[@class="ant-select-selection-search-input"])[2]'); }
    get fieldInputArea() { return $('(//*[@class="ant-select-selector"])[3]'); }
    get fieldInputName() { return $('//*[@placeholder="Input name"]'); }

    //Option Page Section 1
    get optWarehouse0() { return $('(//*[@title="Aloha"])[2]'); }
    get optArea0() { return $('//*[@title="All Area"]'); }

    //Periode Time & Status
    get toggleFsCountdown() { return $('//*[@class="ant-switch-inner"]'); }
    get endDate() { return $('(//*[@placeholder="DD Mon YYYY"])[2]'); }
    get optEndDate() { return $('(//*[@title="2024-09-13"])[2]'); } 
    get startDate() { return $('(//*[@placeholder="DD Mon YYYY"])[1]'); } 
    get optStartDate() { return $('(//*[@title="2024-09-13"])[1]'); }

    //User Segment & Product Quota Section 3
    get fieldSegment() { return $('(//*[@class="ant-select-selection-search"])[4]'); }
    get fieldInputProductQuotaUser() { return $('//*[@placeholder="Input product SKU quota"]'); }
    get fieldInputFlashsaleQuota() { return $('//*[@placeholder="Input participant quota"]'); }
    get fieldMinPurchase() { return $('//*[@placeholder="Input minimum purchase"]'); }

    //Option User Segmet & product Quota Section 3 
    get optSegment() { return $('//div[@title="All Segment"]'); }

    //Flashsale Create Menu 
    get btnTambahProduk() { return $('//*[contains(text(), "Tambah Produk")]'); }
    get btnCreateFlashsale() { return $('//*[contains(text(), "Create Flash Sale")]'); }
    get btnBatal() { return $('//*[contains(text(), "Batal")]'); }
    get btnAksi() { return $('(//*[@class="Table_actions__i8GrK"])[1]'); }

    //Modal Add Product 
    get fieldCariProduk() { return $('(//*[@class="ant-select-selector"])[5]'); }
    get fieldCariUnit() { return $('(//*[@class="ant-select-selection-search"])[6]'); }
    get fieldInputQty() { return $('(//*[@placeholder="0"])[2]'); }
    get fieldInputHargaJual() { return $('(//*[@placeholder="0"])[3]'); }
    get fieldQtyPerUser() { return $('(//*[@placeholder="0"])[4]'); }
    get btnCancelModal() { return $('//*[contains(text(), "Cancel")]'); }
    get btnUploadCsvModal() { return $('//*[contains(text(), "Upload CSV")]'); }
    get btnAddProductModal() { return $('(//*[contains(text(), "Add Product")])[2]'); }
    get btnSaveModal() { return $('//*[contains(text(), "Save")]'); }

    //Option Modal Add Product 
    get optCariProduk0() { return $('(//*[@role="listbox"])[4]/*[1]'); }
    get optCariProduk1() { return $('(//*[@role="listbox"])[4]/*[2]'); }
    get optUnit0() { return $('(//*[@class="rc-virtual-list-holder-inner"])[5]/*[1]'); }


}