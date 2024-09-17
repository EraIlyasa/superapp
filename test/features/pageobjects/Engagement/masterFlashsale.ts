 //
 export default new class masterFlashsale {
 get navMenuMarketing() { return $('//*[@data-testid="Menu-Marketing"]'); }
 get menuFlashsaleV4() { return $('//*[@data-testid="Menu-FlashsaleV4"]'); }


 //List 
 get fieldInputSearch() { return $('//*[@placeholder="Cari nama flash sale"]'); }
 get btnWarehouse() { return $('//[@class="Table_filterContainer__WbWjE"]/[1]'); }
 get btnArea() { return $('//[@class="Table_filterContainer__WbWjE"]/[2]'); }
 get btnStatus() { return $('//[@class="Table_filterContainer__WbWjE"]/[3]'); }
 get btnBuatFlashsale() { return $('//*[contains(text(), "Buat Flash Sale")]'); }
 get btnXpanArrow() { return $('//[@class="ant-table-row ant-table-row-level-0 Table_tableRowClassname__a3AXN"][1]/[1]/*'); }
 get btnDetailFlashsale() { return $('//[@class="ant-table-row ant-table-row-level-0 Table_tableRowClassname__a3AXN"][1]/[2]//[2]'); }
 get btnLihatArea() { return $('(//*[contains(text(), "Lihat Area")])[1]'); }

 //Filter Modal 
 get filterBtnModalWarehouse() { return $('//*[@data-node-key="warehouse_id"]'); }
 get filterBtnModalArea() { return $('//*[@data-node-key="area"]')}
 get filterBtnModalStatus() { return $('//*[@data-node-key="status"]')}
 get btnModalReset() { return $('//*[@data-testid="modal-reset-filter"]'); }
 get btnModalTerapkan() { return $('//*[@data-testid="modal-apply-filter"]'); }
 get btnModalClose() { return $('//*[@class="ModalHalfFrame_modalCloseIcon__yieRt"]'); }

 //Filter ModalWarehouse
 get fieldInputSearchModalWarehouse() { return $('//*[@placeholder="Cari nama gudang"]'); }
 get radioBtnModalWarehouse0() { return $('(//[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup_uhLeH Radio_radioGroupContainerhePaF Radio_vertical_xq9kx css-1vp3ixv"])[1]/[1]'); }
 get radioBtnModalWarehouse1() { return $('(//[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup_uhLeH Radio_radioGroupContainerhePaF Radio_vertical_xq9kx css-1vp3ixv"])[1]/[2]'); }

 //Filter ModalArea
 get fieldInputSearchModalArea() { return $('//*[@placeholder="Cari area"]'); }
 get radioBtnModalArea0() { return $('(//[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup_uhLeH Radio_radioGroupContainerhePaF Radio_vertical_xq9kx css-1vp3ixv"])[2]/[1]'); }
 get radioBtnModalArea1() { return $('(//[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup_uhLeH Radio_radioGroupContainerhePaF Radio_vertical_xq9kx css-1vp3ixv"])[2]/[2]')}

 //Filter ModalStatus
 get radioBtnModalAllStatus0() { return $('(//[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup_uhLeH Radio_radioGroupContainerhePaF Radio_vertical_xq9kx css-1vp3ixv"])[3]/[1]'); }
 get radioBtnModalDraft() { return $('(//[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup_uhLeH Radio_radioGroupContainerhePaF Radio_vertical_xq9kx css-1vp3ixv"])[3]/[2]'); }
 get radioBtnModalPublished() { return $('(//[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup_uhLeH Radio_radioGroupContainerhePaF Radio_vertical_xq9kx css-1vp3ixv"])[3]/[3]'); }
 get radioBtnModalCompleted() { return $('(//[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup_uhLeH Radio_radioGroupContainerhePaF Radio_vertical_xq9kx css-1vp3ixv"])[3]/[4]'); }
 get radioBtnModalCancelled() { return $('(//[@class="ant-radio-group ant-radio-group-outline RadioFilter_radioGroup_uhLeH Radio_radioGroupContainerhePaF Radio_vertical_xq9kx css-1vp3ixv"])[3]/[5]')}


 //Detail Page Section 1 
 get uploadGambar() { return $('//*[@data-testid="form-file-upload-image"]'); }
 get clickGambar() { return $('//*[@class="ant-upload"]'); }
 get fieldInputWarehpuse() { return $('(//*[@class="ant-select-selection-placeholder"])[1]'); }
 get fieldInputArea() { return $('(//*[@class="ant-select-selection-placeholder"])[1]'); }
 get fieldInputName() { return $('//*[@placeholder="Input name"]'); }

 get createFs() { return $('//button[normalize-space(.)="Buat Flash Sale"]');
 }
 
 get submitFs() {
     return $('//button[normalize-space(.)="Create Flash Sale"]');
 }
 
 get uploadFs() {
     return $('//span[.//input[@data-testid="form-file-upload-image"]]'); 
 }
}
  // Metode untuk mengupload file
//  public async uploadFile(filePath: string) {
//      const inputFile = await this.uploadFs;
//      await inputFile.setValue(filePath);
//  }
//  }


// public get successMessage() {

//     return $('selector-for-success-message'); // Add the correct selector here
// }