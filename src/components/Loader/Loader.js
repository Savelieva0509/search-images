import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{ margin:'20', }}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#3f51b5"
      />
    </div>
  );
};

export default Loader;
