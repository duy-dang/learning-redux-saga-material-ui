const styles = (theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: ' row',
    height: '100vw',
  },
  wrapperContent: {
    width: '100%',
    padding: 10,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  shiftleft: {
    marginLeft: -240,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});

export default styles;
