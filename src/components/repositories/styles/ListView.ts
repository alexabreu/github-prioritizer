import { Theme } from "@material-ui/core";

const styles = (theme: Theme) => {
  return {
    root: {
      width: '100%',
      transition: 'width 350ms ease',
      borderRight: '1px solid #eee',
    },
    hasIssues: {
      width: '50%'
    },
  };
}

export default styles;
