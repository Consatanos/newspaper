import React from 'react';
import { InfoServiceConsumer } from '../info-service-context';

const withInfoService = () => (Wrapped) => {
  return (props) => {
    return (
      <InfoServiceConsumer>
        {
          (infoListService) => {
            return (
              <Wrapped
                {...props}
                infoListService={infoListService} />
            )
          }
        }
      </InfoServiceConsumer>
    )
  };
};

export default withInfoService;