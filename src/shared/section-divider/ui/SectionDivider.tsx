export const SectionDivider=()=>{
    return(
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        padding: '40px 0',
      }}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            style={{
              width: i === 2 ? '16px' : '10px',
              height: i === 2 ? '16px' : '10px',
              borderRadius: '50%',
              backgroundColor: '#ccc',
              opacity: i === 2 ? 1 : 0.5,
              transition: 'transform 0.3s',
            }}
          />
        ))}
      </div>
    )
}
  