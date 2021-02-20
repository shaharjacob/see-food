import chroma from 'chroma-js';

export const selectOptions = [
    {value: "tomato", label: 'עגבניה', color: '#575757'},
    {value: "cucumber", label: 'מלפפון', color: '#575757'},
    {value: "chicken", label: 'עוף', color: '#575757'},
    {value: "cream-cheese", label: 'גבינה לבנה', color: '#575757'},
]

export const selectStyles = {
    // container: styles => ({
    //     ...styles,
    //     width: '25%',
    // }),

    // main
    control: styles => ({
         ...styles, 
         backgroundColor: 'white',
         boxShadow: '2px 2px 5px #919191',
        }),

    // options shown after scrolldown is open
    option: (styles, { data, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
        cursor: 'default',
  
        ':active': {
          ...styles[':active'],
          backgroundColor:
            isSelected ? data.color : color.alpha(0.3).css(),
        },
      };
    },

    // the label box that shown after selected
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },

    // the label text that shown after selected
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),

    // the x button
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: data.color,
        color: 'white',
      },
    }),
  };