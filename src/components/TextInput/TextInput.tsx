import type { TextInputProps } from '../../types';

function TextInput ({onTextChange,placeholder = 'Start typing...',initialValue = ''}: TextInputProps) {

  return (

    <div className="">
      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      />
    </div>

  );
  
};

export {TextInput};