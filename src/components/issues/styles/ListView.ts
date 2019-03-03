import { CSSProperties } from 'react';
import { Theme } from "@material-ui/core";

const styles = (theme: Theme) => {
  return {
    root: {
      transition: 'border 300ms ease',
      border: '1px dashed transparent',
      margin: '30px 20px 20px 20px',
      position: 'relative' as CSSProperties['position']
    },
    hasIssues: {
      width: '50%'
    },
    isDraggingOver: {
      borderColor: theme.palette.secondary.light
    },
    reorderingHelperText: {
      position: 'absolute' as CSSProperties['position'],
      top: '-25px',
      left: '0px',
      display: 'flex',
      alignItems: 'center',
    },
    reorderingHelperIcon: {
      marginRight: '5px'
    }
  };
}

export default styles;
