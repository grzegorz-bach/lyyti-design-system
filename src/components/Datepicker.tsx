import { useState, useEffect } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import InputLabel from './InputLabel';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Calendar from './icons/Calendar';
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';

export const useStyles = makeStyles<Theme, UseStylesProps>((theme) =>
  createStyles({
    root: {
      ...theme.typography.body1,
      color: theme.palette.text.primary,
      display: 'inline-flex',
      flexDirection: 'column',
      minWidth: 220,
      verticalAlign: 'top',
      '& label': {
        color: theme.palette.grey[400],
        letterSpacing: '0.15px',
        lineHeight: '26px',
      },
      '& .DateInput': {
        background: 'none',
        width: 'initial',
      },
      '& .DateInput_input': {
        background: 'none',
        border: 0,
        boxSizing: 'content-box',
        color: 'currentColor',
        font: 'inherit',
        height: '1.1876em',
        lineHeight: 'inherit',
        padding: (props) => (props.margin === 'dense' ? '10.5px 14px' : '18.5px 14px'),
        width: 'initial',
      },
      '& .SingleDatePickerInput': {
        background: 'none',
      },
      '& .SingleDatePickerInput__withBorder': {
        borderColor:
          theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)',
        borderRadius: theme.shape.borderRadius,
        boxSizing: 'border-box',
      },
      '& .SingleDatePickerInput__withBorder:hover': {
        borderColor: theme.palette.primary.main,
      },
      '& .SingleDatePickerInput_calendarIcon': {
        color: theme.palette.grey[400],
        lineHeight: 1,
        marginRight: 8,
        padding: 0,
      },
      '& .DateRangePickerInput': {
        background: 'none',
      },
      '& .DateRangePickerInput__withBorder': {
        borderColor:
          theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)',
        borderRadius: theme.shape.borderRadius,
        boxSizing: 'border-box',
      },
      '& .DateRangePickerInput__withBorder:hover': {
        borderColor: theme.palette.primary.main,
      },
      '& .DateRangePickerInput_calendarIcon': {
        color: theme.palette.grey[400],
        lineHeight: 1,
        marginRight: 8,
        padding: 0,
      },
      '& .CalendarMonth_caption': {
        color: theme.palette.text.primary,
      },
      '& .CalendarDay': {
        fontSize: '16px',
      },
      '& .CalendarDay__default': {
        border: 'none',
      },
      '& .CalendarDay__selected': {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
      '& .CalendarDay__selected_span': {
        background: theme.palette.primaryStates.selected,
        color: theme.palette.text.primary,
      },
      '& .CalendarDay__hovered_span': {
        background: theme.palette.primaryStates.selected,
        color: theme.palette.text.primary,
      },
    },
    focused: {
      '& label': {
        color: theme.palette.text.primary,
      },
      '& .SingleDatePickerInput__withBorder': {
        borderColor: theme.palette.primary.main,
      },
      '& .SingleDatePickerInput_calendarIcon': {
        color: theme.palette.primary.main,
      },
      '& .DateRangePickerInput__withBorder': {
        borderColor: theme.palette.primary.main,
      },
      '& .DateRangePickerInput_calendarIcon': {
        color: theme.palette.primary.main,
      },
    },
    navButton: {
      lineHeight: 1,
      padding: '8px',
      position: 'absolute',
      top: 16,
    },
    navPrev: {
      left: '22px',
    },
    navNext: {
      right: '22px',
    },
  })
);

export interface DatepickerProps {
  /** Selected date. */
  date: moment.Moment | null;
  /** Date pickers need to have a unique id.  */
  id: string;
  /** Label for the date picker input field. */
  label?: string;
  /** Determines date localization. */
  locale?: string;
  /** Defines the look of the input element. */
  margin?: Margin;
  /** Number of months displayed on the date picker. */
  numberOfMonths?: number;
  /** Function to control changing the date. */
  onDateChange: (date: moment.Moment | null) => void;
}

type Margin = 'dense' | 'normal';

interface UseStylesProps {
  margin: Margin;
}

const Datepicker = ({
  date,
  id = 'datepicker',
  label,
  locale = 'en',
  margin = 'dense',
  numberOfMonths = 1,
  onDateChange,
}: DatepickerProps): JSX.Element => {
  const classes = useStyles({ margin });

  useEffect(() => {
    moment.locale(locale);
  }, [locale]);

  const [focused, setFocused] = useState(false);

  const handleFocusChange = (arg: { focused: typeof focused }) => {
    setFocused(arg.focused);
  };

  return (
    <div className={`${classes.root} ${focused ? classes.focused : ''}`}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <SingleDatePicker
        id={id}
        date={date}
        focused={focused}
        onDateChange={onDateChange}
        onFocusChange={handleFocusChange}
        customInputIcon={<Calendar />}
        inputIconPosition="after"
        numberOfMonths={numberOfMonths}
        navPrev={
          <span className={`${classes.navButton} ${classes.navPrev}`}>
            <ChevronLeft />
          </span>
        }
        navNext={
          <span className={`${classes.navButton} ${classes.navNext}`}>
            <ChevronRight />
          </span>
        }
        hideKeyboardShortcutsPanel
        firstDayOfWeek={1}
      />
    </div>
  );
};

export default Datepicker;
