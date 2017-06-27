<template>
  <div class="test">
    <div class="operation">
      <div class="add">
        <div class="m-b-10">
          <span>Name:</span>
          <input type="text" v-model="inputValue.name" placeholder="Please input Name"/>
        </div>
        <div class="m-b-10">
          <span>Age:</span>
          <input type="number" v-model.number="inputValue.age" placeholder="Please input Age"/>
        </div>
        <div class="m-b-10">
          <span>Sex:</span>
          <input type="text" v-model="inputValue.sex" placeholder="Please input Sex"/>
        </div>
        <div class="m-b-10">
          <button @click="add()">Add</button>
        </div>
      </div>
      <div class="search">
        <input type="text" v-model="inputValue.search" placeholder="Please input Name" @change="search()"/>
        <button @click="search()">Search</button>
      </div>
    </div>

    <form>
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Operations</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(list, index) in lists" :key="index">
          <td>{{index + 1}}</td>
          <td>{{list.name}}</td>
          <td>{{list.age}}</td>
          <td>{{list.sex}}</td>
          <td>
            <button @click="del(index)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </form>
    <!--<flight-footer></flight-footer>-->
    <!--<flight-list-footer></flight-list-footer>-->
    <!--<hotel-list-footer></hotel-list-footer>-->
    <!--<home-page-footer></home-page-footer>-->
    <!--<rentcar-search-footer></rentcar-search-footer>-->
    <!--<rentcar-list-footer></rentcar-list-footer>-->
    <!--<train-ticket-footer></train-ticket-footer>-->
    <btn-footer></btn-footer>
  </div>
</template>

<script>
  import flightFooter from '@/components/Footer/FlightFooter';
  import flightListFooter from '@/components/Footer/FlightListFooter';
  import hotelListFooter from '@/components/Footer/HotelListFooter';
  import homePageFooter from '@/components/Footer/HomePageFooter';
  import rentcarSearchFooter from '@/components/Footer/RentcarSearchFooter';
  import rentcarListFooter from '@/components/Footer/RentcarListFooter';
  import trainTicketFooter from '@/components/Footer/trainTicketFooter';
  import btnFooter from '@/components/Footer/BtnFooter';
  export default {
    name: 'Test',
    data () {
      return {
        lists: [
          {name: 'Linda', age: 18, sex: 'girl'},
          {name: 'Lin', age: 19, sex: 'girl'},
          {name: 'Mary', age: 20, sex: 'girl'},
          {name: 'Leon', age: 21, sex: 'boy'},
          {name: 'Lecky', age: 22, sex: 'boy'}
        ],
        inputValue: {
          name: '',
          age: null,
          sex: '',
          search: ''
        }
      };
    },
    methods: {
      add: function () {
        if (this.inputValue.name && this.inputValue.age && this.inputValue.sex) {
          this.lists.push({
            'name': this.inputValue.name,
            'age': this.inputValue.age,
            'sex': this.inputValue.sex
          });
          this.inputValue.name = '';
          this.inputValue.age = '';
          this.inputValue.sex = '';
        } else {
          alert('Please input name，age and sex!');
        }
      },
      del: function (index) {
//        let len = this.lists.length;
//        let newLists = this.lists.slice(0, index).concat(this.lists.slice(index + 1, len));
//        this.lists = newLists;
        this.lists.splice(index, 1);
      },
      search: function () {
        let newLists = this.lists;
        let searchLists = [];
        let value = this.inputValue.search;
        newLists.forEach(function (v) {
          if (v.name.indexOf(value) > -1) {
            searchLists.push(v);
          }
        });
        this.lists = searchLists;
      }
    },
    components: {
      flightFooter,
      flightListFooter,
      hotelListFooter,
      homePageFooter,
      rentcarSearchFooter,
      rentcarListFooter,
      trainTicketFooter,
      btnFooter
    }
  };
</script>

<style scoped lang="scss">
  .test{
    margin-top: 50px;
  }
  .operation{
    overflow: hidden;
    zoom: 1;
  }
  .add, .search{
    width: 50%;
    float: left;
  }
  .add{
    text-align: left;
    span{
      display: inline-block;
      width: 50px;
    }
  }
  .m-b-10{
    margin-bottom: 10px;
  }
  table{
    border-bottom: 1px solid #666;
    border-left: 1px solid #666;
    border-right: 1px solid #666;
  }
  th, td{
    border-top: 1px solid #666;
    padding: 5px;
  }
  thead{
    th{
      background-color: #41B883;
    }
  }
  $c:rgba(0, 180, 100, 0.8);
  td{
     color: opacify($c, 0.8);
   }
  button{
    background-color: #41B883;
    &:hover{
      background-color: greenyellow;
      cursor: pointer;
    }
  }
</style>

