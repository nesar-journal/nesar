;;; Directory Local Variables            -*- no-byte-compile: t -*-
;;; See (info "(emacs) Directory Variables") for more information.
;;;
;;; This project's .editorconfig specifies indent_style = space and
;;; indent_size = 2. These settings enforce the same thing natively in
;;; Emacs, for any major mode, in case editorconfig support isn't
;;; enabled (or isn't respected by a given mode).

((nil . ((indent-tabs-mode . nil)))

 ;; Common modes used for .ts/.tsx/.jsx files -- harmless to set if unused.
 (typescript-mode . ((typescript-indent-level . 2)))
 (typescript-ts-mode . ((typescript-ts-mode-indent-offset . 2)))
 (tsx-ts-mode . ((typescript-ts-mode-indent-offset . 2)))
 (js-mode . ((js-indent-level . 2)))
 (js2-mode . ((js2-basic-offset . 2)))
 (rjsx-mode . ((js-indent-level . 2)))
 (web-mode . ((web-mode-markup-indent-offset . 2)
              (web-mode-code-indent-offset . 2)
              (web-mode-css-indent-offset . 2)))

 ;; .scss files
 (scss-mode . ((css-indent-offset . 2))))
