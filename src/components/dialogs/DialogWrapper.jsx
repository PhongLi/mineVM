'use client';

import { Fragment } from 'react';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import clsx from 'clsx';

export default function DialogWrapper({
  isOpen,
  onClose,
  dialogClassName = '',
  panelClassName = '',
  children,
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className={clsx('fixed inset-0 z-40', dialogClassName)}
        onClose={onClose}
      >
        {/* overlay */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80" />
        </TransitionChild>

        {/* panel */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel className={clsx(panelClassName, 'bg-primary-950')}>
                {children}
              </DialogPanel>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
}
