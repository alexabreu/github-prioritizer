import { CSSProperties } from 'react';
import { Theme } from "@material-ui/core";

const styles = (theme: Theme) => {
  return {
    root: {
      margin: '100px auto 0 auto',
      padding: '50px',
      display: 'flex',
      width: '80%',
      height: '50%',
      justifyContent: 'center'
    },
    emptyStateCardContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column' as CSSProperties['flexDirection']
    },
    emptyStateCardIcon: {
      margin: '0 0 20px 0'
    }
  };
}

export default styles;
