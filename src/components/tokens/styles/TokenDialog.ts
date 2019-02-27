import { Theme } from "@material-ui/core";

const styles = (theme: Theme) => {
  return {
    root: {
    },
    form: {
      display: 'flex',
      'align-items': 'flex-end',
      'justify-content': 'space-between',
      padding: 20,
    },
    divider: {
      margin: '20px 0',
    },
    input: {
      width: '80%'
    }
  }
}

export default styles;