import Table from '../Components/Table';

function TableText({name,dataHeader,data}) {

    return (
      <div className="flex flex-col gap-y-6 lg:pb-[72px]">
    <h5 className="font-normal lg:leading-7 lg:text-xl text-center">{name}</h5>
    <Table dataHeader={dataHeader} data={data} center="text-center" />


      </div>
    );
  
   
  }
  
  export default TableText;
  
//   //styleName: H5;
// font-family: Oldschool Grotesk;
// font-size: 20px;
// font-weight: 400;
// line-height: 28px;
// text-align: left;
