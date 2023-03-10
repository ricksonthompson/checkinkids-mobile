import {Alert, View} from 'react-native';
import React from 'react';
import {
  CardActions,
  CardDetails,
  CheckinButton,
  CheckinText,
  ChildrensQuantityText,
  ChildrensText,
  Container,
  DateCult,
  DateCultText,
  HeaderCard,
  HistoryButton,
  HistoryText,
  QuantityChildrens,
  ShiftCult,
  ShiftText,
  StatusText,
  Text,
} from './styles';
import {Image} from 'react-native';
import ChildrensIcon from '../../assets/childrens.png';
import SunIcon from '../../assets/sun.png';
import MoonIcon from '../../assets/moon.png';
import {StatusCult} from '../../components/Header/styles';
import {EStatusCult, EShiftCult} from '../../utils/ETypes';
import {getDayAndMonth, getWeekDay} from '../../utils/date.service';
import StatusFinishedIcon from '../../assets/status-finished.png';
import StatusInProgressIcon from '../../assets/status-in-running.png';
import StatusPendingIcon from '../../assets/status-pending.png';
import {useNavigation} from '@react-navigation/native';
import {SelectScreenNavigationProp} from '../../interfaces/navigation/types';

interface ICultProps {
  quantityChildrens: number;
  date: Date;
  time: string;
  status: EStatusCult;
  shift: EShiftCult;
  id: string;
}

export const Cult = ({
  date,
  shift,
  status,
  time,
  quantityChildrens,
  id,
}: ICultProps) => {
  const navigation = useNavigation<SelectScreenNavigationProp>();

  return (
    <Container
      style={{
        shadowColor: '#a4a1a1',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6,
      }}>
      <HeaderCard>
        <DateCult>
          <View>
            <Text fontStyle='Bold' style={{ fontSize: 20}}>{getWeekDay(date).toUpperCase()}</Text>
            <Text fontStyle='Regular' style={{ fontSize: 20}}>{getDayAndMonth(date).toUpperCase()}</Text>
          </View>
          <Text fontStyle="Bold" style={{ fontSize: 30}}>{time}</Text>
        </DateCult>
        <StatusCult>
          <Image
            source={
              status === EStatusCult.FINISHED
                ? StatusFinishedIcon
                : status === EStatusCult.IN_PROGRESS
                ? StatusInProgressIcon
                : StatusPendingIcon
            }
            style={{width: 20, height: 20}}
          />
          <StatusText>{status}</StatusText>
        </StatusCult>
      </HeaderCard>

      <CardDetails>
        <QuantityChildrens>
          <View style={{marginRight: 5}}>
            <Image source={ChildrensIcon} style={{height: 35, width: 35}} />
          </View>
          <View>
            <ChildrensText>Crian??as:</ChildrensText>
            <ChildrensQuantityText>
              {quantityChildrens} presentes
            </ChildrensQuantityText>
          </View>
        </QuantityChildrens>

        <ShiftCult>
          {shift === EShiftCult.MORNING ? (
            <Image
              source={SunIcon}
              style={{height: 35, width: 35, marginRight: 5}}
            />
          ) : (
            <Image
              source={MoonIcon}
              style={{height: 35, width: 35, marginRight: 5}}
            />
          )}
          <ShiftText>{shift}</ShiftText>
        </ShiftCult>
      </CardDetails>

      <CardActions>
        {status === EStatusCult.FINISHED ? (
          <HistoryButton>
            <HistoryText>Hist??rico</HistoryText>
          </HistoryButton>
        ) : (
          <CheckinButton
            onPress={() =>
              navigation.navigate('SelectChildren', {
                cultId: id,
              })
            }>
            <CheckinText>Check-In</CheckinText>
          </CheckinButton>
        )}
      </CardActions>
    </Container>
  );
};
