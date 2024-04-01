export default {
  wrapper: 'wrapper rounded-md',
  icon:{
    sm:'-mt-11 h-5 w-5',
    md:'ml-4 h-5 w-5'
  },
  container:'container flex items-center',
  label:'text-md font-semibold',
  main:{
    sm:'labelcenter',
    md:'labelcenter pl-3'
  },
  size: {
    xs:'labelxs w-[80px] aspect-ratio p-2 text-md  flex items-center justify-center',
    sm:'labelsm w-[200px] aspect-ratio p-5 text-sm  flex items-center justify-between',
    md:'labelmd h-20 w-full pr-6 text-sm  flex items-center justify-between'
  },
  description:{
    checked:'text-white',
    unchecked:'pl-3 mt-2 first-of-type:pl-0 pr-1 font-light text-gray-500'
  },
  extradescription:'mt-2',
  required: 'text-sm text-red-500 dark:text-red-400',
  help: 'text-sm text-gray-500 dark:text-gray-400',
  variant:{
    solid:'rounded-md cursor-pointer peer-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-checked:ring-2 peer-checked:ring-{color}-500 peer-checked:ring-offset-2 peer-checked:ring-offset-white text-gray-700 peer-checked:text-white bg-{color}-50 peer-checked:bg-{color}-500',
    outline:'rounded-md cursor-pointer peer-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-checked:ring-4 peer-checked:ring-{color}-500 text-gray-700 peer-checked:text-{color}-500 bg-{color}-50',
    ghost:'rounded-md cursor-pointer peer-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-checked:ring-4 peer-checked:ring-{color}-500 text-gray-700 peer-checked:text-{color}-500 bg-white hover:bg-{color}-50 peer-checked:bg-{color}-100 peer-disabled:bg-gray-200 peer-disabled:text-gray-700 hover:text-{color}-400 border border-gray-100',
    black:'rounded-md cursor-pointer peer-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-checked:ring-4 peer-checked:ring-{color}-500 text-gray-700 peer-checked:text-{color}-500 bg-white border border border-gray-300'
  },
  default: {
    color: 'primary',
    variant:'solid'
  }
}