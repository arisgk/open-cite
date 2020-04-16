export default () => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 24,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.03)',
    },
  },
  infoItem: {
    marginTop: 0,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 'none',
    width: 52,
    marginRight: 16,
  },
  image: {
    width: '100%',
  },
  infoContainer: {
    flex: 'auto',
  },
});
