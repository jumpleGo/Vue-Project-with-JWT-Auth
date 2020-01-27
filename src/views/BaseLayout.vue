<template>
<div class="base-layout">
  <h2 class="base-layout--header">Ваши посылки</h2>

    <add-form 
    class="base-layout--add-form  col-xl-3 col-lg-3 col-md-4 col-12" 
    v-if="showAddModal === true" 
    @closeModal="closeModal" 
    />

    <edit-form 
    :currentItemData="{
     currentIdx, currentItem
    }" 
    
    class="base-layout--edit-form  col-xl-3 col-lg-3 col-md-4 col-12" 
    v-if="showEditModal === true" 
    @closeEditModal="closeEditModal" 
    />

    <div class="base-layout__line">
     
        <small-details 
        @openEditModal="openEditModal"
        @getCurrentItem="getCurrentItem($event)"
        class="col-xl-2 col-lg-3 col-md-3 col-12 small-card" 
        :pack="pack" 
        :index="index"
        v-for="(pack, index) in getPacks" 
        :key="index" />
      
        <add-button 
        class="col-xl-2 col-lg-3 col-md-3 col-12 add-button" 
        @click.native="showAddModal = true" 
        />


    </div>

</div>
</template>

<script>
import EditForm from "@/components/EditForm.vue"
import SmallDetails from "@/components/SmallDetails.vue"
import AddButton from "@/components/AddButton.vue"
import AddForm from "@/components/AddForm.vue"
export default {
    name: 'BaseLayout',
    components: {
        AddButton,
        AddForm,
        SmallDetails,
        EditForm
    },
    data() {
        return {
            showAddModal: false,
            alert: false,
            showEditModal: false,
            currentItem: {},
            currentIdx : Number
        }
    },
    methods: {
        closeModal() {
            this.showAddModal = false
        },
        closeEditModal() {
            this.showEditModal = false
        },
        openEditModal() {
            this.showEditModal = true;
        },
        getCurrentItem(data){
            this.currentItem = data[0];
            this.currentIdx = data[1]
        }
    },
    computed: {
        getPacks(){
            return this.$store.state.packages
        }
    },
     mounted(){
        this.$store.dispatch('authentication/checkOnUser')
    }
    
    
}
</script>

<style lang="scss" scoped>
.show {
    display: none;
}

.base-layout {
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;

    &--header{
      text-transform: uppercase;
      font-weight: 600;
    }

    &__line {
    display: flex;
    flex-wrap: wrap;

    
    }

    &--add-form,
    &--edit-form {
        position: fixed;
        top: 0;
        right: 0;
        background: #fcfcfc;
        box-shadow: -3px -2px 6px 0px rgba(0, 0, 0, 0.13),
            3px 2px 6px 0px rgb(255, 255, 255);
        z-index: 2;
    }

    .small-card,
    .add-button {
        margin: 10px;

        @media screen and (min-width: 320px) and (max-width: 620px) {
            margin: unset;
            margin-top: 10px;

        }
    }

}
</style>
