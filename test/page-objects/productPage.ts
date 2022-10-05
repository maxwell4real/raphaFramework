class ProductPageClass {

    get addToBasketBtn(){
        return $(`//button[@class='scroll-target optionitem purchase action sc-caSCKo czoaii sc-kAzzGY kiHYeC']`);
    }

    get productTitlePo(){
        return $(`.sc-bxivhb.gtCaPF`);
    }

    get miniBasketModal(){
        return $(`.mini-basket.mini-basket--open`);
    }

    get basketBtnInMiniModal(){
        return $(`input[value='Go To Basket']`);
    }

    async selectColour(value){
        await  (await $(`//div[@class='sc-hzDkRC hZoVsb']//label[${value}]`)).click();
    }

    async selectSize(value){
        await (await $(`//span[normalize-space()='${value}']`)).click();
    }

   async scrollToBottom(){
        await (await $(".swatches.sc-jhAzac.fVuNMe")).scrollIntoView({behavior:"smooth"});

    }

    async clickOnAddToBasketBtn(){
        await (await this.addToBasketBtn).click();
    }

    async getProductNameText(){
        return await this.productTitlePo.getText();
    }

    async clickOnBasketBtnInMiniModal(){
        await (await this.miniBasketModal).waitForDisplayed();
        await (await this.basketBtnInMiniModal).click();
    }
   

}

export const productpage = new ProductPageClass()