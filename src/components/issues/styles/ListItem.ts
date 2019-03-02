import { Theme } from "@material-ui/core";

const styles = (theme: Theme) => {
  return {
    root: {
    },
    secondaryText: {
      margin: '2px 0 0 0',
    },
    body: {
      fontSize: '12px',
    },
    createdAt: {
      fontSize: '12px',
    },
    updatedAt: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  };
}

export default styles;
