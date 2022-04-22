import UsdIcon from 'static/icons/usd-icon.svg';
import EurIcon from 'static/icons/eur-icon.svg';
import YenIcon from 'static/icons/yen-icon.svg';

export const options = [
  {
    id: 'usd',
    icon: UsdIcon,
    primaryValue: 1000,
    primaryCurrency: 'USD',
    secondaryValue: 23046000,
    secondaryCurrency: 'VND',
  },
  {
    id: 'eur',
    icon: EurIcon,
    primaryValue: 50,
    primaryCurrency: 'EUR',
    secondaryValue: 1531972,
    secondaryCurrency: 'VND',
  },
  {
    id: 'yen',
    icon: YenIcon,
    primaryValue: 10000,
    primaryCurrency: 'YEN',
    secondaryValue: 2103317,
    secondaryCurrency: 'VND',
  },
];
