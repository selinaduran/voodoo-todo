import DonutBox from '../DonutBox';

// all props will be used eventually
const DonutShelf = ({ donutShelfData, handleBoxClick, isAdd }) => {
  return (
    <>
      {donutShelfData.map((el) => {
        return <></>; // render donut boxes
      })}
    </>
  );
};

export default DonutShelf;
