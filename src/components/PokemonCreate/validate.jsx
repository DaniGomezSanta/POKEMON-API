

export default function validate(input){
    const errors= {};
    let RegExpressionText = /^[a-zA-Z\s]*$/;  
    let RegExpressionNum= /^[0-9,$]*$/;
    let RegExpressionUrl= /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

    // Errors para name-------------------------------------------
    if(!input.name){ errors.name = 'Name is required' }
    if(!RegExpressionText.test(input.name)){ errors.name = 'Not number and special characters'}

    // Errors para imagen------------------------------------------------

    if(!input.img) {errors.img = 'Image is required'}
    if(!RegExpressionUrl.test(input.img)) {errors.img = 'Wrong URL'}

    // Errors para hp----------------------------------------------------
    if(!input.hp) {errors.hp = 'Hp is required'}

    if(!RegExpressionNum.test(input.hp)){errors.hp = 'Only numbers'}

    if(input.hp < 1 || input.hp > 150){
        if(input.hp < 1) {errors.hp ='life should be more than 1'}
        if(input.hp > 150) {errors.hp = 'life should be less than 150'}
    }

    // Errors para attack --------------------------------------------------
    if(!input.attack) {errors.attack = 'Attack is required'}

    if(!RegExpressionNum.test(input.attack)) {errors.attack = 'Only numbers'}

    if(input.attack < 1 || input.attack > 200){
        if(input.attack < 1) {errors.attack = 'Attack should be more than 1'}
        if(input.attack > 200 ) {errors.attack = 'Attack should be less than 200'}
    }

    // Errors para defense-----------------------------------------------------------------
    if(!input.defense) {errors.defense = 'Defense is required'}

    if(!RegExpressionNum.test(input.defense)) {errors.defense = 'Only Numbers'}

    if(input.defense < 1 || input.defense > 150){
        if(input.defense < 1) {errors.defense = 'Defense should be more than 1'}
        if(input.defense > 150) {errors.defense = 'Defense should be less than 150'}
    }

    // Errors para speed--------------------------------------------------------------------
    if(!input.speed) {errors.speed = 'Defense is required'}

    if(!RegExpressionNum.test(input.speed)) {errors.speed = 'Only numbers'}

    if(input.speed < 1 || input.speed > 150){
        if(input.speed < 1) {errors.speed = 'Speed should be more than 1'}
        if(input.speed > 150) {errors.speed = 'Speed should be less than 150'}
    }

    // Errors para weight 
    if(!input.weight) {errors.weight = 'Defense is required'}

    if(!RegExpressionNum.test(input.weight)) {errors.weight = 'Only numbers'}

    if(input.weight < 1 || input.weigth > 2000) {
        if(input.weigth < 1) {errors.weight = 'Weigth should be more than 1'}
        if(input.weight > 2000) {errors.weight = 'Weigth should be less than 2000'}
    }

    //Errors para Types  -------------------------------------------------
    if(!input.types.length){errors.types = 'Type is required'}

    return errors;
}