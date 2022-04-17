"use strict";(self.webpackChunkstudent_mis_mobile_app=self.webpackChunkstudent_mis_mobile_app||[]).push([[6806],{66806:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Camera\": () => (/* binding */ Camera),\n/* harmony export */   \"CameraWeb\": () => (/* binding */ CameraWeb)\n/* harmony export */ });\n/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29895);\n/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97439);\n\n\nclass CameraWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__/* .WebPlugin */ .Uw {\n    async getPhoto(options) {\n        // eslint-disable-next-line no-async-promise-executor\n        return new Promise(async (resolve, reject) => {\n            if (options.webUseInput || options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .CameraSource.Photos */ .oK.Photos) {\n                this.fileInputExperience(options, resolve);\n            }\n            else if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .CameraSource.Prompt */ .oK.Prompt) {\n                let actionSheet = document.querySelector('pwa-action-sheet');\n                if (!actionSheet) {\n                    actionSheet = document.createElement('pwa-action-sheet');\n                    document.body.appendChild(actionSheet);\n                }\n                actionSheet.header = options.promptLabelHeader || 'Photo';\n                actionSheet.cancelable = false;\n                actionSheet.options = [\n                    { title: options.promptLabelPhoto || 'From Photos' },\n                    { title: options.promptLabelPicture || 'Take Picture' },\n                ];\n                actionSheet.addEventListener('onSelection', async (e) => {\n                    const selection = e.detail;\n                    if (selection === 0) {\n                        this.fileInputExperience(options, resolve);\n                    }\n                    else {\n                        this.cameraExperience(options, resolve, reject);\n                    }\n                });\n            }\n            else {\n                this.cameraExperience(options, resolve, reject);\n            }\n        });\n    }\n    async pickImages(_options) {\n        // eslint-disable-next-line no-async-promise-executor\n        return new Promise(async (resolve) => {\n            this.multipleFileInputExperience(resolve);\n        });\n    }\n    async cameraExperience(options, resolve, reject) {\n        if (customElements.get('pwa-camera-modal')) {\n            const cameraModal = document.createElement('pwa-camera-modal');\n            cameraModal.facingMode =\n                options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .CameraDirection.Front */ .GW.Front ? 'user' : 'environment';\n            document.body.appendChild(cameraModal);\n            try {\n                await cameraModal.componentOnReady();\n                cameraModal.addEventListener('onPhoto', async (e) => {\n                    const photo = e.detail;\n                    if (photo === null) {\n                        reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_0__/* .CapacitorException */ .xz('User cancelled photos app'));\n                    }\n                    else if (photo instanceof Error) {\n                        reject(photo);\n                    }\n                    else {\n                        resolve(await this._getCameraPhoto(photo, options));\n                    }\n                    cameraModal.dismiss();\n                    document.body.removeChild(cameraModal);\n                });\n                cameraModal.present();\n            }\n            catch (e) {\n                this.fileInputExperience(options, resolve);\n            }\n        }\n        else {\n            console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.`);\n            this.fileInputExperience(options, resolve);\n        }\n    }\n    fileInputExperience(options, resolve) {\n        let input = document.querySelector('#_capacitor-camera-input');\n        const cleanup = () => {\n            var _a;\n            (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);\n        };\n        if (!input) {\n            input = document.createElement('input');\n            input.id = '_capacitor-camera-input';\n            input.type = 'file';\n            input.hidden = true;\n            document.body.appendChild(input);\n            input.addEventListener('change', (_e) => {\n                const file = input.files[0];\n                let format = 'jpeg';\n                if (file.type === 'image/png') {\n                    format = 'png';\n                }\n                else if (file.type === 'image/gif') {\n                    format = 'gif';\n                }\n                if (options.resultType === 'dataUrl' ||\n                    options.resultType === 'base64') {\n                    const reader = new FileReader();\n                    reader.addEventListener('load', () => {\n                        if (options.resultType === 'dataUrl') {\n                            resolve({\n                                dataUrl: reader.result,\n                                format,\n                            });\n                        }\n                        else if (options.resultType === 'base64') {\n                            const b64 = reader.result.split(',')[1];\n                            resolve({\n                                base64String: b64,\n                                format,\n                            });\n                        }\n                        cleanup();\n                    });\n                    reader.readAsDataURL(file);\n                }\n                else {\n                    resolve({\n                        webPath: URL.createObjectURL(file),\n                        format: format,\n                    });\n                    cleanup();\n                }\n            });\n        }\n        input.accept = 'image/*';\n        input.capture = true;\n        if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .CameraSource.Photos */ .oK.Photos ||\n            options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .CameraSource.Prompt */ .oK.Prompt) {\n            input.removeAttribute('capture');\n        }\n        else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .CameraDirection.Front */ .GW.Front) {\n            input.capture = 'user';\n        }\n        else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .CameraDirection.Rear */ .GW.Rear) {\n            input.capture = 'environment';\n        }\n        input.click();\n    }\n    multipleFileInputExperience(resolve) {\n        let input = document.querySelector('#_capacitor-camera-input-multiple');\n        const cleanup = () => {\n            var _a;\n            (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);\n        };\n        if (!input) {\n            input = document.createElement('input');\n            input.id = '_capacitor-camera-input-multiple';\n            input.type = 'file';\n            input.hidden = true;\n            input.multiple = true;\n            document.body.appendChild(input);\n            input.addEventListener('change', (_e) => {\n                const photos = [];\n                // eslint-disable-next-line @typescript-eslint/prefer-for-of\n                for (let i = 0; i < input.files.length; i++) {\n                    const file = input.files[i];\n                    let format = 'jpeg';\n                    if (file.type === 'image/png') {\n                        format = 'png';\n                    }\n                    else if (file.type === 'image/gif') {\n                        format = 'gif';\n                    }\n                    photos.push({\n                        webPath: URL.createObjectURL(file),\n                        format: format,\n                    });\n                }\n                resolve({ photos });\n                cleanup();\n            });\n        }\n        input.accept = 'image/*';\n        input.click();\n    }\n    _getCameraPhoto(photo, options) {\n        return new Promise((resolve, reject) => {\n            const reader = new FileReader();\n            const format = photo.type.split('/')[1];\n            if (options.resultType === 'uri') {\n                resolve({\n                    webPath: URL.createObjectURL(photo),\n                    format: format,\n                    saved: false,\n                });\n            }\n            else {\n                reader.readAsDataURL(photo);\n                reader.onloadend = () => {\n                    const r = reader.result;\n                    if (options.resultType === 'dataUrl') {\n                        resolve({\n                            dataUrl: r,\n                            format: format,\n                            saved: false,\n                        });\n                    }\n                    else {\n                        resolve({\n                            base64String: r.split(',')[1],\n                            format: format,\n                            saved: false,\n                        });\n                    }\n                };\n                reader.onerror = e => {\n                    reject(e);\n                };\n            }\n        });\n    }\n    async checkPermissions() {\n        if (typeof navigator === 'undefined' || !navigator.permissions) {\n            throw this.unavailable('Permissions API not available in this browser');\n        }\n        try {\n            // https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query\n            // the specific permissions that are supported varies among browsers that implement the\n            // permissions API, so we need a try/catch in case 'camera' is invalid\n            const permission = await window.navigator.permissions.query({\n                name: 'camera',\n            });\n            return {\n                camera: permission.state,\n                photos: 'granted',\n            };\n        }\n        catch (_a) {\n            throw this.unavailable('Camera permissions are not available in this browser');\n        }\n    }\n    async requestPermissions() {\n        throw this.unimplemented('Not implemented on web.');\n    }\n}\nconst Camera = new CameraWeb();\n\n//# sourceMappingURL=web.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjY4MDYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnRTtBQUNGO0FBQ3ZELHdCQUF3QixnRUFBUztBQUN4QztBQUNBO0FBQ0E7QUFDQSwwREFBMEQsOEVBQW1CO0FBQzdFO0FBQ0E7QUFDQSx3Q0FBd0MsOEVBQW1CO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0RBQWtEO0FBQ3hFLHNCQUFzQixxREFBcUQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywrRUFBcUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHlFQUFrQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhFQUFtQjtBQUNsRCwrQkFBK0IsOEVBQW1CO0FBQ2xEO0FBQ0E7QUFDQSx1Q0FBdUMsK0VBQXFCO0FBQzVEO0FBQ0E7QUFDQSx1Q0FBdUMsNkVBQW9CO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msd0JBQXdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSwwQkFBMEIsUUFBUTtBQUNsQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQjtBQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0dWRlbnQtbWlzLW1vYmlsZS1hcHAvLi9ub2RlX21vZHVsZXMvQGNhcGFjaXRvci9jYW1lcmEvZGlzdC9lc20vd2ViLmpzP2MzMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViUGx1Z2luLCBDYXBhY2l0b3JFeGNlcHRpb24gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuaW1wb3J0IHsgQ2FtZXJhU291cmNlLCBDYW1lcmFEaXJlY3Rpb24gfSBmcm9tICcuL2RlZmluaXRpb25zJztcbmV4cG9ydCBjbGFzcyBDYW1lcmFXZWIgZXh0ZW5kcyBXZWJQbHVnaW4ge1xuICAgIGFzeW5jIGdldFBob3RvKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFzeW5jLXByb21pc2UtZXhlY3V0b3JcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLndlYlVzZUlucHV0IHx8IG9wdGlvbnMuc291cmNlID09PSBDYW1lcmFTb3VyY2UuUGhvdG9zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlSW5wdXRFeHBlcmllbmNlKG9wdGlvbnMsIHJlc29sdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5zb3VyY2UgPT09IENhbWVyYVNvdXJjZS5Qcm9tcHQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uU2hlZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwd2EtYWN0aW9uLXNoZWV0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb25TaGVldCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25TaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3B3YS1hY3Rpb24tc2hlZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhY3Rpb25TaGVldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFjdGlvblNoZWV0LmhlYWRlciA9IG9wdGlvbnMucHJvbXB0TGFiZWxIZWFkZXIgfHwgJ1Bob3RvJztcbiAgICAgICAgICAgICAgICBhY3Rpb25TaGVldC5jYW5jZWxhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWN0aW9uU2hlZXQub3B0aW9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogb3B0aW9ucy5wcm9tcHRMYWJlbFBob3RvIHx8ICdGcm9tIFBob3RvcycgfSxcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogb3B0aW9ucy5wcm9tcHRMYWJlbFBpY3R1cmUgfHwgJ1Rha2UgUGljdHVyZScgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGFjdGlvblNoZWV0LmFkZEV2ZW50TGlzdGVuZXIoJ29uU2VsZWN0aW9uJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZS5kZXRhaWw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUlucHV0RXhwZXJpZW5jZShvcHRpb25zLCByZXNvbHZlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhRXhwZXJpZW5jZShvcHRpb25zLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYUV4cGVyaWVuY2Uob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIHBpY2tJbWFnZXMoX29wdGlvbnMpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFzeW5jLXByb21pc2UtZXhlY3V0b3JcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm11bHRpcGxlRmlsZUlucHV0RXhwZXJpZW5jZShyZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGNhbWVyYUV4cGVyaWVuY2Uob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmIChjdXN0b21FbGVtZW50cy5nZXQoJ3B3YS1jYW1lcmEtbW9kYWwnKSkge1xuICAgICAgICAgICAgY29uc3QgY2FtZXJhTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwd2EtY2FtZXJhLW1vZGFsJyk7XG4gICAgICAgICAgICBjYW1lcmFNb2RhbC5mYWNpbmdNb2RlID1cbiAgICAgICAgICAgICAgICBvcHRpb25zLmRpcmVjdGlvbiA9PT0gQ2FtZXJhRGlyZWN0aW9uLkZyb250ID8gJ3VzZXInIDogJ2Vudmlyb25tZW50JztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FtZXJhTW9kYWwpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBjYW1lcmFNb2RhbC5jb21wb25lbnRPblJlYWR5KCk7XG4gICAgICAgICAgICAgICAgY2FtZXJhTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignb25QaG90bycsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBob3RvID0gZS5kZXRhaWw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaG90byA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBDYXBhY2l0b3JFeGNlcHRpb24oJ1VzZXIgY2FuY2VsbGVkIHBob3RvcyBhcHAnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGhvdG8gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHBob3RvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXdhaXQgdGhpcy5fZ2V0Q2FtZXJhUGhvdG8ocGhvdG8sIG9wdGlvbnMpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYW1lcmFNb2RhbC5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2FtZXJhTW9kYWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNhbWVyYU1vZGFsLnByZXNlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlSW5wdXRFeHBlcmllbmNlKG9wdGlvbnMsIHJlc29sdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGxvYWQgUFdBIEVsZW1lbnQgJ3B3YS1jYW1lcmEtbW9kYWwnLiBTZWUgdGhlIGRvY3M6IGh0dHBzOi8vY2FwYWNpdG9yanMuY29tL2RvY3MvcHdhLWVsZW1lbnRzLmApO1xuICAgICAgICAgICAgdGhpcy5maWxlSW5wdXRFeHBlcmllbmNlKG9wdGlvbnMsIHJlc29sdmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbGVJbnB1dEV4cGVyaWVuY2Uob3B0aW9ucywgcmVzb2x2ZSkge1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX2NhcGFjaXRvci1jYW1lcmEtaW5wdXQnKTtcbiAgICAgICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIChfYSA9IGlucHV0LnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVDaGlsZChpbnB1dCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LmlkID0gJ19jYXBhY2l0b3ItY2FtZXJhLWlucHV0JztcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSAnZmlsZSc7XG4gICAgICAgICAgICBpbnB1dC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoX2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbMF07XG4gICAgICAgICAgICAgICAgbGV0IGZvcm1hdCA9ICdqcGVnJztcbiAgICAgICAgICAgICAgICBpZiAoZmlsZS50eXBlID09PSAnaW1hZ2UvcG5nJykge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXQgPSAncG5nJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmlsZS50eXBlID09PSAnaW1hZ2UvZ2lmJykge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXQgPSAnZ2lmJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVzdWx0VHlwZSA9PT0gJ2RhdGFVcmwnIHx8XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucmVzdWx0VHlwZSA9PT0gJ2Jhc2U2NCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZXN1bHRUeXBlID09PSAnZGF0YVVybCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVVybDogcmVhZGVyLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5yZXN1bHRUeXBlID09PSAnYmFzZTY0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGI2NCA9IHJlYWRlci5yZXN1bHQuc3BsaXQoJywnKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTY0U3RyaW5nOiBiNjQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJQYXRoOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQuYWNjZXB0ID0gJ2ltYWdlLyonO1xuICAgICAgICBpbnB1dC5jYXB0dXJlID0gdHJ1ZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc291cmNlID09PSBDYW1lcmFTb3VyY2UuUGhvdG9zIHx8XG4gICAgICAgICAgICBvcHRpb25zLnNvdXJjZSA9PT0gQ2FtZXJhU291cmNlLlByb21wdCkge1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdjYXB0dXJlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5kaXJlY3Rpb24gPT09IENhbWVyYURpcmVjdGlvbi5Gcm9udCkge1xuICAgICAgICAgICAgaW5wdXQuY2FwdHVyZSA9ICd1c2VyJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLmRpcmVjdGlvbiA9PT0gQ2FtZXJhRGlyZWN0aW9uLlJlYXIpIHtcbiAgICAgICAgICAgIGlucHV0LmNhcHR1cmUgPSAnZW52aXJvbm1lbnQnO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LmNsaWNrKCk7XG4gICAgfVxuICAgIG11bHRpcGxlRmlsZUlucHV0RXhwZXJpZW5jZShyZXNvbHZlKSB7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfY2FwYWNpdG9yLWNhbWVyYS1pbnB1dC1tdWx0aXBsZScpO1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgKF9hID0gaW5wdXQucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZUNoaWxkKGlucHV0KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuaWQgPSAnX2NhcGFjaXRvci1jYW1lcmEtaW5wdXQtbXVsdGlwbGUnO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICdmaWxlJztcbiAgICAgICAgICAgIGlucHV0LmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICBpbnB1dC5tdWx0aXBsZSA9IHRydWU7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChfZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBob3RvcyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLWZvci1vZlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGlucHV0LmZpbGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybWF0ID0gJ2pwZWcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZS50eXBlID09PSAnaW1hZ2UvcG5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0ID0gJ3BuZyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZmlsZS50eXBlID09PSAnaW1hZ2UvZ2lmJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0ID0gJ2dpZic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGhvdG9zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgd2ViUGF0aDogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHBob3RvcyB9KTtcbiAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dC5hY2NlcHQgPSAnaW1hZ2UvKic7XG4gICAgICAgIGlucHV0LmNsaWNrKCk7XG4gICAgfVxuICAgIF9nZXRDYW1lcmFQaG90byhwaG90bywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IHBob3RvLnR5cGUuc3BsaXQoJy8nKVsxXTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnJlc3VsdFR5cGUgPT09ICd1cmknKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdlYlBhdGg6IFVSTC5jcmVhdGVPYmplY3RVUkwocGhvdG8pLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgc2F2ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwocGhvdG8pO1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZXN1bHRUeXBlID09PSAnZGF0YVVybCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFVcmw6IHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlNjRTdHJpbmc6IHIuc3BsaXQoJywnKVsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBjaGVja1Blcm1pc3Npb25zKCkge1xuICAgICAgICBpZiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgfHwgIW5hdmlnYXRvci5wZXJtaXNzaW9ucykge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy51bmF2YWlsYWJsZSgnUGVybWlzc2lvbnMgQVBJIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyJyk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9QZXJtaXNzaW9ucy9xdWVyeVxuICAgICAgICAgICAgLy8gdGhlIHNwZWNpZmljIHBlcm1pc3Npb25zIHRoYXQgYXJlIHN1cHBvcnRlZCB2YXJpZXMgYW1vbmcgYnJvd3NlcnMgdGhhdCBpbXBsZW1lbnQgdGhlXG4gICAgICAgICAgICAvLyBwZXJtaXNzaW9ucyBBUEksIHNvIHdlIG5lZWQgYSB0cnkvY2F0Y2ggaW4gY2FzZSAnY2FtZXJhJyBpcyBpbnZhbGlkXG4gICAgICAgICAgICBjb25zdCBwZXJtaXNzaW9uID0gYXdhaXQgd2luZG93Lm5hdmlnYXRvci5wZXJtaXNzaW9ucy5xdWVyeSh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2NhbWVyYScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FtZXJhOiBwZXJtaXNzaW9uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHBob3RvczogJ2dyYW50ZWQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoJ0NhbWVyYSBwZXJtaXNzaW9ucyBhcmUgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXInKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyByZXF1ZXN0UGVybWlzc2lvbnMoKSB7XG4gICAgICAgIHRocm93IHRoaXMudW5pbXBsZW1lbnRlZCgnTm90IGltcGxlbWVudGVkIG9uIHdlYi4nKTtcbiAgICB9XG59XG5jb25zdCBDYW1lcmEgPSBuZXcgQ2FtZXJhV2ViKCk7XG5leHBvcnQgeyBDYW1lcmEgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdlYi5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///66806\n")}}]);