import queryString from 'query-string';

export default function getParseQueryString (searchName) {
  return queryString.parse (searchName);
}
