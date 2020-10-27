import React, { FunctionComponent } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: chunky => ({
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: '3px',
    padding: (chunky ? '16px 24px' : '12px 24px'),
  }),
  outlined: variant => ( variant === 'outlined' ? {
      backgroundColor: '#FFFFFF',
      '&:hover': {
          backgroundColor: "#DDE6E6",
      },
      '&:active': {
          backgroundColor: 'rgba(5, 117, 111, 0.1)'
      },
      '&:disabled': {
          color: '#739C9A',
      }
  } : {}),
})

export interface ButtonProps extends MuiButtonProps {
    chunky?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({ children, chunky, ...props }) => {
  const classes = useStyles(chunky);
    return (
        <MuiButton className={`${classes.root} ${classes.outlined}`} {...props}>
            {children}
        </MuiButton>
    )
};

export default Button;
