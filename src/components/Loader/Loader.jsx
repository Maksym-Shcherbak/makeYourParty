import { Circles } from 'react-loader-spinner';

import { Wrapper } from './Loader.styled';

// export const Spiner = () => {
//   return (
//     <Wrapper>
//       <Dna
//         visible={true}
//         height="120"
//         width="120"
//         ariaLabel="dna-loading"
//         wrapperStyle={{}}
//         wrapperClass="dna-wrapper"
//       />
//     </Wrapper>
//   );
// };

export const Loader = () => {
  return (
    <Wrapper>
      <Circles
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#272727"
        backgroundColor="#F4442E"
      />
    </Wrapper>
  );
};

// export default Loader;
