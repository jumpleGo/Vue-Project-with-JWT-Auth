<template>
<div class="add-form">
    <div class="add-form__close">
        <img class="add-form__close--img" src="@/assets/buttons/close.png" alt="" @click="closeModal(); " />
    </div>
    <h3 class="add-form__heading">
        Информация о посылке
    </h3>

    <form class="add-form__form" @submit.prevent="addData(); closeModal()">

      <div class="add-form__form--wrapper">
          <input type="radio" id="inside" value="inside" v-model="input_pick" >
          <label for="inside">Внутренняя доставка</label>

          <input type="radio" id="outside" value="outside" v-model="input_pick" >
          <label for="outside">Международная доставка</label>
        </div>


        <div class="add-form__form--range">
          <input type="range" v-model="info.range" >
          <span>{{ info.range }} км</span>
        </div>

        
        <div class="add-form__form--wrapper">
            <span class="add-form__form--wrapper-text">Сумма доставки</span>
            <input class="add-form__form--wrapper-disable-input"  type="number" :value="info.range * info.PRICE"  disabled> 
            <span class="add-form__form--wrapper-ruble">₽</span>
        </div>
        <button type="submit" class="add-form__form--button">
            Добавить
        </button>
    </form>
</div>
</template>

<script>
export default {
    name: 'AddForm',

    data() {
        return {
            input_pick: '',
           
          info:{
           range: 0,
           PRICE: 1,
           picked: ''
          },
          
        }
    },

    methods: {
        closeModal() {
            this.$emit("closeModal")
        },
        addData() {
            this.$store.dispatch("addPackage", Object.assign({}, this.info));
        }
    },
    watch:{
     input_pick: function(value){
        if(value === 'inside'){
           this.info.PRICE = 3;
           this.info.picked = 'Внутренняя доставка'
        }else if(value === 'outside'){
           this.info.PRICE = 5;
           this.info.picked = 'Международная доставка'
        }
      }
    }

}
</script>

<style lang="scss" scoped>
.add-form {
    min-height: 100vh;
    padding: 30px;

    &__heading {
        font-weight: 600;
        font-size: 25px;
        margin-top: 40px;
        border-bottom: 1px solid rgb(226, 226, 226);
        padding-bottom: 20px;

    }

    &__close {
        position: absolute;
        right: 15px;
        top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;

        &--img {
            width: 17px;
            height: 17px;
        }

        &:hover {
            cursor: pointer
        }
    }

    &__form {
        display: flex;
        flex-direction: column;
        margin-top: 40px;


        &--button {
            box-shadow: 3px 2px 6px 0px rgba(0, 0, 0, 0.13), -3px -2px 6px 0px rgb(255, 255, 255);
            border: unset;
            padding: 10px 15px;
            font-weight: 500;
            transition: 0.2s;
            margin-top: 20px;
            background: rgb(235, 134, 2);
            color: white;

            &:focus {
                outline: none;
            }

            &:hover {
                cursor: pointer;
                box-shadow: 3px 2px 4px -1px rgba(0, 0, 0, 0.4), -3px -2px 6px 0px rgb(255, 255, 255);
            }

            
        }

        &--range{
          display: flex;
          flex-direction: column;
          margin-top: 20px;

        }

        &--wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;

            &-text {
                font-weight: 600;
            }

            label{
                line-height: 14px;
            }

            &-ruble{
              font-weight: 500;
              font-size: 20px;
              color: rgb(235, 134, 2);
            }

            

            &-disable-input {
                outline: none;
                border: none;
                background: transparent;
                width: min-content;
                text-align: right;
                font-weight: 500;
                font-size: 20px;
                color: rgb(235, 134, 2);
                width: 50%;
            }
        }
    }
}
</style>
