import { AnnotationEvent } from '@grafana/data';
import { getBackendSrv } from '@grafana/runtime';

import { AnnotationTagsResponse } from './types';

export function saveAnnotation(annotation: AnnotationEvent) {
  console.log(annotation);
  let formData: Record<string, string> = {};
  formData.from = annotation.time!.toString();
  formData.to = annotation.timeEnd!.toString();
  formData.sid = annotation.sid!.toString();
  if (annotation.pid !== undefined)
    formData.pid = annotation.pid!.toString();
  formData.text = annotation.text!;
  if (annotation.tags !== undefined)
    formData.tag = annotation.tags!.toString();

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData)
  };

  fetch('http://premise.tsst.xyz:8080/grafana', requestOptions)
    // .then(response => response.json())
    .then(data => console.log(data));
  // TODO
  return getBackendSrv().post('/api/annotations', annotation);
}

export function updateAnnotation(annotation: AnnotationEvent) {
  return getBackendSrv().put(`/api/annotations/${annotation.id}`, annotation);
}

export function deleteAnnotation(annotation: AnnotationEvent) {
  return getBackendSrv().delete(`/api/annotations/${annotation.id}`);
}

export async function getAnnotationTags() {
  const response: AnnotationTagsResponse = await getBackendSrv().get('/api/annotations/tags');
  return response.result.tags.map(({ tag, count }) => ({
    term: tag,
    count,
  }));
}
