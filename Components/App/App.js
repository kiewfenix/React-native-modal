import React from 'react';
import {
  View
} from 'react-native';
import MenuItem from '../MenuItem/MenuItem';

const App = () => {
  const data = '12.10.2021';
  const nearPrice = 11;
  const euroPrice = 35.76;
  const description = ' Chilled asparagus & spring pea soup';
  const consistOf = 'Heirloom cherry tomatoes, watermelon, reasted corn, balsamic';
 

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MenuItem 
      data={data} 
      nearPrice={nearPrice} 
      euroPrice={euroPrice} 
      description={description} 
      consistOf={consistOf} 
      />
    </View>
  );
};

export default App;
