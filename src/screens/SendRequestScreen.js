import React, {useState} from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import Text from '../components/Text';
import NumberPad from '../components/NumberPad';

export default SendRequestScreen = () => {
  const [amount, setAmount] = useState("0");

  const convert2Dollars = (amount) => {
    const newAmount = amount / 100;

    return newAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  const pressKey = (item, index) => {
    setAmount((prev) => {
      return index != 10 ? prev + item : prev.slice(0, prev.length - 1);
    });
  }

  return (
    <Container>
      <Text center large heavy margin="16px 0 0 0">Send</Text>

      <Amount>
        <Text title heavy>{convert2Dollars(amount)}</Text>
        <Text bold color="#727479">Choose amount to send</Text>
      </Amount>

      <User>
        <ProfilePhoto source={require("../../assets/avatar-default.jpg")} />
        <UserDetails>
          <Text medium heavy>User Name</Text>
          <Text bold color="#727479">Patreon</Text>
        </UserDetails>

        <MaterialIcons name="edit" size={24} color="#ffffff" />
      </User>

      <Send>
        <Text medium heavy>Send {convert2Dollars(amount)} to User Name</Text>
      </Send>

      <NumberPad onPress={pressKey}/>

      <StatusBar barStyle="light-content" />
    </Container>
  )
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const Amount = styled.View`
  margin-top: 64px;
  align-items: center;
`;

const User = styled.View`
  margin: 32px 16px;
  flex-direction: row;
  align-items: center;
`;

const ProfilePhoto = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

const UserDetails = styled.View`
  flex: 1;
  margin: 0 16px;
`;

const Send = styled.View`
  margin: 16px;
  background-color: #5196f4;
  padding: 16px 32px;
  align-items: center;
  border-radius: 12px;
`;

const StatusBar = styled.StatusBar``;
