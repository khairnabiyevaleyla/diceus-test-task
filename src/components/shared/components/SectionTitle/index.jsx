import styles from './styles.module.scss';

const SectionTitle = ({ 
  title, 
  paddingTop = '0',
  paddingRight = '0',
  paddingBottom = '0',
  paddingLeft = '0'
}) => {
  return (
    <p 
      className={styles.title} 
      style={{ 
        paddingTop, 
        paddingRight, 
        paddingBottom, 
        paddingLeft 
      }}
    >
      {title}
    </p>
  )
}

export default SectionTitle