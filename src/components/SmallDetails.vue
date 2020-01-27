<template>
<div class="small-details">
    <p class="small-details--pick">{{ pack.picked }}</p>
    <p class="small-details--km">{{ pack.range }} км</p>
    <p class="price">{{ total_price }} руб.</p>
    <img class="delete" @click="deletePackage" :src="getButtonUrl('close.png')">
    <img class="edit" @click="openEditModal(); emitItem()" :src="getButtonUrl('pencil.png')">
</div>
</template>

<script>
export default {
    name: "SmallDetails",
    computed:{
      total_price: function(){
          return this.pack.PRICE * this.pack.range
      }
    },
    props: {
        pack: {
            range: {
                type: Number,
                default: 0,
                required: true
            },
            PRICE: {
                type: Number,
                default: 0,
                required: true
            },
            picked: {
                type: String,
                default: '',
                required: true
            },
            type: Object
        },
        index: {
            type: Number,
            required: true
        }
    },
    
    methods: {
        getButtonUrl(src) {
            return require("@/assets/buttons/" + src)
        },
        deletePackage(){
            this.$store.dispatch('deletePackage', this.pack)
        },
        openEditModal(){
            this.$emit('openEditModal')
        },
        emitItem(){
            this.$emit('getCurrentItem', [this.pack, this.index]);
        }
    }
}
</script>

<style lang="scss" scoped>
p {
    margin: 0;
    padding: 0;
}

.small-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.32);
    border: unset;
    background-color: #fffeff;
    background-image: url('./../assets/images/box.png');
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: 100% 180%;
    padding: 10px 55px 10px 10px;
    font-weight: 500;
    transition: 0.2s;
    border-radius: 6px;
    color: rgba(0, 0, 0, 0.9);
    border-left: 5px solid #835510;

    &--pick {
        margin-bottom: 10px;
        line-height: 0.9;
        font-weight: 600;
        font-size: 17px;
        
    }

    &--km{
      font-weight: 500;
    }
}

.delete {
    position: absolute;
    top: 7px;
    right: 7px;
    width: 13px;
    height: auto;

    &:hover {
        cursor: pointer;
    }
}

.edit{
     position: absolute;
    top: 7px;
    right: 28px;
    width: 13px;
    height: auto;

    &:hover {
        cursor: pointer;
    }
}
</style>
