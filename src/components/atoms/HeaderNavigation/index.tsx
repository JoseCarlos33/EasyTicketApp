import React from 'react';
import { View } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import { 
  Header,
  IconButton,
  PageTitle
} from './styles';
IconMaterial.loadFont();
 
interface HeaderNavigationProps{
  title: string;
  navigation: any;
}

function HeaderNavigation({navigation, title}: HeaderNavigationProps) {
  return (
    <Header>
      <IconButton onPress={() => navigation.goBack()}>
        <IconMaterial name="arrow-back" size={27} />
      </IconButton>
      <PageTitle>
        {title}
      </PageTitle>
      <View/>
    </Header>
  );
}

export default HeaderNavigation;