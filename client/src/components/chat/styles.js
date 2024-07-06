const styles = {
  con: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconCon: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  },
  aboutIcon: (hover) => (
    {
      position: 'absolute',
      left: 1,
      opacity: hover ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out',
    }
  ),
  avatar: (hover) => ({
    marginLeft: hover ? '32px' : '0', transition: 'margin-left 0.3s ease-in-out', outline: 1,
    outlineColor: 'gray'
  }),
  groupAvatarCon: (hover) => ({
    marginLeft: hover ? '32px' : '0', transition: 'margin-left 0.3s ease-in-out',
    width: 60, border: '1px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'nowrap', flexShrink: 0, position: 'relative'

  }),
  groupAvatar: (i) => (
    {
      position: 'absolute',
      left: i === 0 ? 0 : i === 1 ? 10 : i === 2 ? 20 : null,
      zIndex: i === 0 ? 3 : i === 1 ? 2 : i === 2 ? 1 : null,
      outline: 1,
      outlineColor: 'gray'
    }
  ),
  textCon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }

}
export default styles